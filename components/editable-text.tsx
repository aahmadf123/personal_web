"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useContentStore } from "@/lib/content-store"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Pencil, Save, X } from "lucide-react"

interface EditableTextProps {
  children: React.ReactNode
  pageId: string
  sectionId: string
  contentId: string
  multiline?: boolean
  className?: string
}

export function EditableText({
  children,
  pageId,
  sectionId,
  contentId,
  multiline = false,
  className = "",
}: EditableTextProps) {
  const { isEditMode, pageContent, updateContent } = useContentStore()
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState<string>("")

  // Initialize content when component mounts or when pageContent changes
  useEffect(() => {
    if (pageContent[pageId]?.[sectionId]) {
      const content = pageContent[pageId][sectionId].find((item) => item.id === contentId)
      if (content) {
        setValue(content.content)
      } else if (typeof children === "string") {
        setValue(children)
      }
    } else if (typeof children === "string") {
      setValue(children)
    }
  }, [pageContent, pageId, sectionId, contentId, children])

  const handleEdit = () => {
    // Find the content in the store or use children as fallback
    const content =
      pageContent[pageId]?.[sectionId]?.find((item) => item.id === contentId)?.content ||
      (typeof children === "string" ? children : "")
    setValue(content)
    setEditing(true)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  const handleSave = () => {
    // Get existing content or create new array
    const existingContent = pageContent[pageId]?.[sectionId] || []

    // Find if this content already exists
    const contentIndex = existingContent.findIndex((item) => item.id === contentId)

    const updatedContent = [...existingContent]

    if (contentIndex >= 0) {
      // Update existing content
      updatedContent[contentIndex] = {
        ...updatedContent[contentIndex],
        content: value,
      }
    } else {
      // Add new content
      updatedContent.push({
        id: contentId,
        type: multiline ? "paragraph" : "text",
        content: value,
      })
    }

    updateContent(pageId, sectionId, updatedContent)
    setEditing(false)
  }

  // If not in edit mode, just render children
  if (!isEditMode) {
    return <>{children}</>
  }

  // If editing, show input
  if (editing) {
    return (
      <div className="relative">
        {multiline ? (
          <Textarea value={value} onChange={(e) => setValue(e.target.value)} className={className} rows={4} />
        ) : (
          <Input value={value} onChange={(e) => setValue(e.target.value)} className={className} />
        )}
        <div className="flex justify-end gap-2 mt-2">
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
        </div>
      </div>
    )
  }

  // Show editable indicator
  return (
    <span className="group relative inline-block">
      <span className={`border-transparent border-b-2 group-hover:border-primary/30 ${className}`}>
        {pageContent[pageId]?.[sectionId]?.find((item) => item.id === contentId)?.content || children}
      </span>
      <Button
        size="icon"
        variant="ghost"
        className="absolute -top-4 -right-4 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleEdit}
      >
        <Pencil className="h-3 w-3" />
      </Button>
    </span>
  )
}

