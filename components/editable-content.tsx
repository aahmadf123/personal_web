"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useContentStore, type ContentItem } from "@/lib/content-store"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, X, Save, Bold, Italic, List, Heading1, Heading2, LinkIcon, ImageIcon } from "lucide-react"

interface EditableContentProps {
  pageId: string
  sectionId: string
  defaultContent?: ContentItem[]
  renderContent: (content: ContentItem[]) => React.ReactNode
}

export function EditableContent({ pageId, sectionId, defaultContent = [], renderContent }: EditableContentProps) {
  const { isEditMode, pageContent, updateContent } = useContentStore()
  const [editing, setEditing] = useState(false)
  const [editableContent, setEditableContent] = useState<ContentItem[]>([])
  const [htmlContent, setHtmlContent] = useState("")

  // Initialize content from store or default
  useEffect(() => {
    const storedContent = pageContent[pageId]?.[sectionId] || defaultContent
    setEditableContent(storedContent)

    // If it's HTML content, set it in the editor
    if (storedContent[0]?.type === "custom") {
      setHtmlContent(storedContent[0]?.content || "")
    }
  }, [pageId, sectionId, pageContent, defaultContent])

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCancel = () => {
    // Reset to stored content
    const storedContent = pageContent[pageId]?.[sectionId] || defaultContent
    setEditableContent(storedContent)

    // If it's HTML content, reset it in the editor
    if (storedContent[0]?.type === "custom") {
      setHtmlContent(storedContent[0]?.content || "")
    }

    setEditing(false)
  }

  const handleSave = () => {
    // If we're editing HTML content
    if (editableContent[0]?.type === "custom") {
      const updatedContent = [...editableContent]
      updatedContent[0] = {
        ...updatedContent[0],
        content: htmlContent,
      }
      updateContent(pageId, sectionId, updatedContent)
    } else {
      updateContent(pageId, sectionId, editableContent)
    }
    setEditing(false)
  }

  const updateContentItem = (index: number, field: keyof ContentItem, value: any) => {
    const updatedContent = [...editableContent]
    updatedContent[index] = {
      ...updatedContent[index],
      [field]: value,
    }
    setEditableContent(updatedContent)
  }

  const addContentItem = (type: ContentItem["type"]) => {
    const newItem: ContentItem = {
      id: `${pageId}-${sectionId}-${Date.now()}`,
      type,
      content: type === "heading" ? "New Heading" : type === "paragraph" ? "New paragraph text" : "",
    }
    setEditableContent([...editableContent, newItem])
  }

  const removeContentItem = (index: number) => {
    const updatedContent = [...editableContent]
    updatedContent.splice(index, 1)
    setEditableContent(updatedContent)
  }

  // Rich text editor functions
  const insertHtmlAtCursor = (html: string) => {
    const textarea = document.getElementById("html-editor") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value

    const newText = text.substring(0, start) + html + text.substring(end)
    setHtmlContent(newText)

    // Set cursor position after the inserted HTML
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + html.length, start + html.length)
    }, 0)
  }

  const formatText = (format: string) => {
    switch (format) {
      case "bold":
        insertHtmlAtCursor("<strong>bold text</strong>")
        break
      case "italic":
        insertHtmlAtCursor("<em>italic text</em>")
        break
      case "h1":
        insertHtmlAtCursor("<h1>Heading 1</h1>")
        break
      case "h2":
        insertHtmlAtCursor("<h2>Heading 2</h2>")
        break
      case "list":
        insertHtmlAtCursor("<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>")
        break
      case "link":
        const url = prompt("Enter URL:")
        if (url) insertHtmlAtCursor(`<a href="${url}">link text</a>`)
        break
      case "image":
        const imgUrl = prompt("Enter image URL:")
        if (imgUrl) insertHtmlAtCursor(`<img src="${imgUrl}" alt="Image" />`)
        break
    }
  }

  if (!isEditMode) {
    return renderContent(pageContent[pageId]?.[sectionId] || defaultContent)
  }

  if (editing) {
    // If we're editing HTML content
    if (editableContent[0]?.type === "custom") {
      return (
        <div className="relative border-2 border-dashed border-primary p-4 rounded-lg">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Button size="sm" variant="outline" onClick={() => formatText("bold")}>
              <Bold className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("italic")}>
              <Italic className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("h1")}>
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("h2")}>
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("list")}>
              <List className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("link")}>
              <LinkIcon className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => formatText("image")}>
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>

          <Textarea
            id="html-editor"
            value={htmlContent}
            onChange={(e) => setHtmlContent(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Preview:</h3>
            <div className="p-4 border rounded-md bg-card">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      )
    }

    // For structured content
    return (
      <div className="relative border-2 border-dashed border-primary p-4 rounded-lg">
        <div className="space-y-4 mb-4">
          {editableContent.map((item, index) => (
            <Card key={item.id} className="relative">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6"
                onClick={() => removeContentItem(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <CardContent className="p-4">
                {item.type === "heading" && (
                  <Input
                    value={item.content}
                    onChange={(e) => updateContentItem(index, "content", e.target.value)}
                    className="font-bold text-xl mb-2"
                  />
                )}
                {item.type === "paragraph" && (
                  <Textarea
                    value={item.content}
                    onChange={(e) => updateContentItem(index, "content", e.target.value)}
                    rows={4}
                  />
                )}
                {item.type === "list" && (
                  <Textarea
                    value={item.content}
                    onChange={(e) => updateContentItem(index, "content", e.target.value)}
                    placeholder="Enter list items separated by new lines"
                    rows={4}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <Button size="sm" onClick={() => addContentItem("heading")}>
            Add Heading
          </Button>
          <Button size="sm" onClick={() => addContentItem("paragraph")}>
            Add Paragraph
          </Button>
          <Button size="sm" onClick={() => addContentItem("list")}>
            Add List
          </Button>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      <div className="absolute -top-4 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" variant="ghost" onClick={handleEdit}>
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
      </div>
      <div className="border-2 border-transparent hover:border-dashed hover:border-primary/30 rounded-lg p-4">
        {renderContent(pageContent[pageId]?.[sectionId] || defaultContent)}
      </div>
    </div>
  )
}

