"use client"

import { useState } from "react"
import Image from "next/image"
import { useContentStore } from "@/lib/content-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Save, X, ImageIcon } from "lucide-react"

interface EditableImageProps {
  src: string
  alt: string
  width: number
  height: number
  pageId: string
  sectionId: string
  contentId: string
  className?: string
}

export function EditableImage({
  src,
  alt,
  width,
  height,
  pageId,
  sectionId,
  contentId,
  className = "",
}: EditableImageProps) {
  const { isEditMode, pageContent, updateContent } = useContentStore()
  const [editing, setEditing] = useState(false)
  const [imageUrl, setImageUrl] = useState(src)
  const [imageAlt, setImageAlt] = useState(alt)

  const handleEdit = () => {
    // Find the content in the store or use props as fallback
    const content = pageContent[pageId]?.[sectionId]?.find((item) => item.id === contentId)
    if (content) {
      setImageUrl(content.content)
      setImageAlt(content.metadata?.alt || alt)
    }
    setEditing(true)
  }

  const handleCancel = () => {
    setImageUrl(src)
    setImageAlt(alt)
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
        content: imageUrl,
        metadata: {
          ...updatedContent[contentIndex].metadata,
          alt: imageAlt,
        },
      }
    } else {
      // Add new content
      updatedContent.push({
        id: contentId,
        type: "image",
        content: imageUrl,
        metadata: {
          alt: imageAlt,
        },
      })
    }

    updateContent(pageId, sectionId, updatedContent)
    setEditing(false)
  }

  // If not in edit mode, just render the image
  if (!isEditMode) {
    const storedContent = pageContent[pageId]?.[sectionId]?.find((item) => item.id === contentId)
    const imageSrc = storedContent?.content || src
    const imageAltText = storedContent?.metadata?.alt || alt

    return (
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={imageAltText}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  // If editing, show input fields
  if (editing) {
    return (
      <div className="relative border-2 border-dashed border-primary p-4 rounded-lg">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Image URL</label>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Alt Text</label>
            <Input
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Description of the image"
              className="mt-1"
            />
          </div>

          <div className="flex items-center justify-center p-4 border rounded-md">
            {imageUrl ? (
              <div className="relative max-w-full max-h-[200px] overflow-hidden">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={imageAlt}
                  width={width}
                  height={height}
                  className="object-contain max-h-[200px]"
                  onError={() => setImageUrl("/placeholder.svg?height=200&width=200&text=Invalid+Image")}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 mb-2" />
                <span>No image URL provided</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
        </div>
      </div>
    )
  }

  // Show editable indicator
  return (
    <div className="group relative inline-block">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`border-2 border-transparent group-hover:border-primary/30 ${className}`}
      />
      <Button
        size="icon"
        variant="secondary"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleEdit}
      >
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  )
}

