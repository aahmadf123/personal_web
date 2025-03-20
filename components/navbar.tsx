"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Plus, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useContentStore } from "@/lib/content-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [navDialogOpen, setNavDialogOpen] = React.useState(false)
  const [editingNav, setEditingNav] = React.useState<any>(null)
  const pathname = usePathname()

  const { navigation, isEditMode, addNavigationItem, updateNavigationItem, removeNavigationItem } = useContentStore()

  // Sort navigation items by order
  const mainRoutes = React.useMemo(
    () => navigation.filter((item) => item.isMainNav).sort((a, b) => a.order - b.order),
    [navigation],
  )

  const moreRoutes = React.useMemo(
    () => navigation.filter((item) => !item.isMainNav).sort((a, b) => a.order - b.order),
    [navigation],
  )

  const handleAddNav = () => {
    setEditingNav({
      href: "/",
      label: "",
      isMainNav: true,
      order: mainRoutes.length,
    })
    setNavDialogOpen(true)
  }

  const handleEditNav = (nav) => {
    setEditingNav({ ...nav })
    setNavDialogOpen(true)
  }

  const handleSaveNav = () => {
    if (editingNav.id) {
      updateNavigationItem(editingNav.id, editingNav)
    } else {
      addNavigationItem(editingNav)
    }
    setNavDialogOpen(false)
    setEditingNav(null)
  }

  const handleDeleteNav = () => {
    if (editingNav.id) {
      removeNavigationItem(editingNav.id)
    }
    setNavDialogOpen(false)
    setEditingNav(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <span className="hidden font-bold sm:inline-block">John Doe</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {mainRoutes.map((route) => (
              <div key={route.id} className="relative group">
                <Link
                  href={route.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === route.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                </Link>
                {isEditMode && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault()
                      handleEditNav(route)
                    }}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {moreRoutes.map((route) => (
                  <DropdownMenuItem key={route.id} asChild className="relative group">
                    <div className="w-full">
                      <Link
                        href={route.href}
                        className={`w-full block ${pathname === route.href ? "font-medium" : ""}`}
                      >
                        {route.label}
                      </Link>
                      {isEditMode && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 right-2 -translate-y-1/2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleEditNav(route)
                          }}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                {isEditMode && (
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault()
                      handleAddNav()
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Item
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {isEditMode && (
              <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleAddNav}>
                <Plus className="h-4 w-4" />
                Add Link
              </Button>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="font-bold">John Doe</span>
              </Link>
              <nav className="mt-6 flex flex-col gap-4">
                {[...mainRoutes, ...moreRoutes].map((route) => (
                  <div key={route.id} className="relative group">
                    <Link
                      href={route.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        pathname === route.href ? "text-foreground" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                    {isEditMode && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-0 -translate-y-1/2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.preventDefault()
                          handleEditNav(route)
                        }}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditMode && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4" onClick={handleAddNav}>
                    <Plus className="h-4 w-4" />
                    Add Link
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navigation Edit Dialog */}
      <Dialog open={navDialogOpen} onOpenChange={setNavDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingNav?.id ? "Edit Navigation Item" : "Add Navigation Item"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nav-label" className="text-right">
                Label
              </Label>
              <Input
                id="nav-label"
                value={editingNav?.label || ""}
                onChange={(e) => setEditingNav({ ...editingNav, label: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nav-href" className="text-right">
                URL Path
              </Label>
              <Input
                id="nav-href"
                value={editingNav?.href || ""}
                onChange={(e) => setEditingNav({ ...editingNav, href: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nav-order" className="text-right">
                Order
              </Label>
              <Input
                id="nav-order"
                type="number"
                value={editingNav?.order || 0}
                onChange={(e) => setEditingNav({ ...editingNav, order: Number.parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nav-main" className="text-right">
                Main Navigation
              </Label>
              <div className="col-span-3">
                <Switch
                  id="nav-main"
                  checked={editingNav?.isMainNav || false}
                  onCheckedChange={(checked) => setEditingNav({ ...editingNav, isMainNav: checked })}
                />
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-between">
            <div>
              {editingNav?.id && (
                <Button variant="destructive" onClick={handleDeleteNav}>
                  Delete
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setNavDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveNav}>Save</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}

