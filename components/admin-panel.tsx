"use client"

import type React from "react"

import { useState } from "react"
import { useContentStore } from "@/lib/content-store"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, PenSquare, Save, Database, FileText, Layout } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function AdminPanel() {
  const { isEditMode, toggleEditMode, navigation, pages, addPage } = useContentStore()
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("edit")
  const [newPageDialogOpen, setNewPageDialogOpen] = useState(false)
  const [newPage, setNewPage] = useState({
    title: "",
    slug: "",
    description: "",
    content: "<div><h1>New Page</h1><p>Content goes here</p></div>",
    isPublished: true,
  })

  const handleExport = () => {
    const contentData = localStorage.getItem("content-storage")
    if (contentData) {
      const blob = new Blob([contentData], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `website-content-${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string
          localStorage.setItem("content-storage", content)
          window.location.reload()
        } catch (error) {
          console.error("Error importing content:", error)
          alert("Failed to import content. Invalid file format.")
        }
      }
      reader.readAsText(file)
    }
  }

  const handleCreatePage = () => {
    if (!newPage.title || !newPage.slug) {
      alert("Title and slug are required")
      return
    }

    // Ensure slug starts with /
    const slug = newPage.slug.startsWith("/") ? newPage.slug : `/${newPage.slug}`

    addPage({
      ...newPage,
      slug,
    })

    setNewPageDialogOpen(false)
    setNewPage({
      title: "",
      slug: "",
      description: "",
      content: "<div><h1>New Page</h1><p>Content goes here</p></div>",
      isPublished: true,
    })

    setNewPageDialogOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg">
          <Settings className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Website Admin</SheetTitle>
          <SheetDescription>Manage your website content and settings</SheetDescription>
        </SheetHeader>

        <div className="py-6">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="edit">Edit Mode</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="edit-mode">Edit Mode</Label>
                  <div className="text-sm text-muted-foreground">Enable to edit content directly on the page</div>
                </div>
                <Switch id="edit-mode" checked={isEditMode} onCheckedChange={toggleEditMode} />
              </div>

              {isEditMode && (
                <div className="rounded-md bg-primary/10 p-4">
                  <div className="flex items-start gap-4">
                    <PenSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Edit Mode Active</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Hover over content to see edit controls. Click on text to edit it directly. You can also edit
                        navigation items and add new pages.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => toggleEditMode()}>
                        Exit Edit Mode
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="pages" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Pages</h3>
                <Button size="sm" onClick={() => setNewPageDialogOpen(true)}>
                  Add Page
                </Button>
              </div>

              <div className="space-y-2">
                {pages.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No custom pages yet. Click "Add Page" to create one.</p>
                ) : (
                  pages.map((page) => (
                    <div key={page.id} className="flex justify-between items-center p-2 border rounded-md">
                      <div>
                        <p className="font-medium">{page.title}</p>
                        <p className="text-xs text-muted-foreground">{page.slug}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={page.slug} target="_blank" rel="noreferrer">
                            View
                          </a>
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="rounded-md bg-primary/10 p-4 mt-4">
                <div className="flex items-start gap-4">
                  <Layout className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Custom Pages</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Create custom pages for your website. These pages will be accessible via the URL you specify.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-start gap-4">
                    <Save className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Export Content</h4>
                      <p className="text-sm text-muted-foreground mt-1">Download all website content as a JSON file</p>
                      <Button variant="outline" size="sm" className="mt-2" onClick={handleExport}>
                        Export
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-start gap-4">
                    <Database className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Import Content</h4>
                      <p className="text-sm text-muted-foreground mt-1">Upload a previously exported content file</p>
                      <div className="mt-2">
                        <label htmlFor="content-import">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <span>Select File</span>
                            </Button>
                            <span className="text-sm text-muted-foreground">No file selected</span>
                          </div>
                          <input
                            id="content-import"
                            type="file"
                            accept=".json"
                            className="sr-only"
                            onChange={handleImport}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Reset Content</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Reset all content to default values. This cannot be undone.
                      </p>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="mt-2"
                        onClick={() => {
                          if (confirm("Are you sure you want to reset all content? This cannot be undone.")) {
                            localStorage.removeItem("content-storage")
                            window.location.reload()
                          }
                        }}
                      >
                        Reset All Content
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <SheetFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </SheetFooter>
      </SheetContent>

      {/* New Page Dialog */}
      <Dialog open={newPageDialogOpen} onOpenChange={setNewPageDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Page</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="page-title" className="text-right">
                Page Title
              </Label>
              <Input
                id="page-title"
                value={newPage.title}
                onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="page-slug" className="text-right">
                URL Path
              </Label>
              <div className="col-span-3 flex items-center">
                <span className="mr-1">/</span>
                <Input
                  id="page-slug"
                  value={newPage.slug.startsWith("/") ? newPage.slug.substring(1) : newPage.slug}
                  onChange={(e) => setNewPage({ ...newPage, slug: `/${e.target.value}` })}
                  placeholder="e.g. my-custom-page"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="page-description" className="text-right">
                Description
              </Label>
              <Textarea
                id="page-description"
                value={newPage.description}
                onChange={(e) => setNewPage({ ...newPage, description: e.target.value })}
                className="col-span-3"
                placeholder="Optional page description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="page-published" className="text-right">
                Published
              </Label>
              <div className="col-span-3">
                <Switch
                  id="page-published"
                  checked={newPage.isPublished}
                  onCheckedChange={(checked) => setNewPage({ ...newPage, isPublished: checked })}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewPageDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreatePage}>Create Page</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  )
}

