import type { NavigationItem } from "@/lib/content-store"

export const initialNavigation: NavigationItem[] = [
  {
    id: "nav-home",
    href: "/",
    label: "Home",
    isMainNav: true,
    order: 0,
  },
  {
    id: "nav-about",
    href: "/about",
    label: "About",
    isMainNav: true,
    order: 1,
  },
  {
    id: "nav-projects",
    href: "/projects",
    label: "Projects",
    isMainNav: true,
    order: 2,
  },
  {
    id: "nav-blog",
    href: "/blog",
    label: "Blog",
    isMainNav: true,
    order: 3,
  },
  {
    id: "nav-contact",
    href: "/contact",
    label: "Contact",
    isMainNav: true,
    order: 4,
  },
  {
    id: "nav-education",
    href: "/education",
    label: "Education",
    isMainNav: false,
    order: 0,
  },
  {
    id: "nav-skills",
    href: "/skills",
    label: "Skills",
    isMainNav: false,
    order: 1,
  },
  {
    id: "nav-speaking",
    href: "/speaking",
    label: "Speaking",
    isMainNav: false,
    order: 2,
  },
  {
    id: "nav-publications",
    href: "/publications",
    label: "Publications",
    isMainNav: false,
    order: 3,
  },
  {
    id: "nav-testimonials",
    href: "/testimonials",
    label: "Testimonials",
    isMainNav: false,
    order: 4,
  },
  {
    id: "nav-awards",
    href: "/awards",
    label: "Awards",
    isMainNav: false,
    order: 5,
  },
  {
    id: "nav-resources",
    href: "/resources",
    label: "Resources",
    isMainNav: false,
    order: 6,
  },
]

