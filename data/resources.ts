import type { Resource, VideoResource } from "@/lib/content-store"

export const initialResources = {
  downloads: [
    {
      id: "resource-1",
      title: "Modern React Development Guide",
      description:
        "A comprehensive guide to modern React development practices, including hooks, context, and state management.",
      image: "/placeholder.svg?height=400&width=600&text=React+Guide",
      type: "guide",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "2.4 MB",
    },
    {
      id: "resource-2",
      title: "Web Performance Optimization Checklist",
      description:
        "A detailed checklist for optimizing web application performance, covering everything from code splitting to image optimization.",
      image: "/placeholder.svg?height=400&width=600&text=Performance+Checklist",
      type: "checklist",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "1.8 MB",
    },
    {
      id: "resource-3",
      title: "Frontend Architecture Template",
      description:
        "A starter template for organizing large-scale frontend applications with best practices for folder structure and code organization.",
      image: "/placeholder.svg?height=400&width=600&text=Architecture+Template",
      type: "template",
      githubUrl: "https://github.com/example/frontend-architecture",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "resource-4",
      title: "TypeScript Best Practices",
      description:
        "A collection of TypeScript best practices and patterns for writing maintainable and type-safe code.",
      image: "/placeholder.svg?height=400&width=600&text=TypeScript+Practices",
      type: "guide",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "3.1 MB",
    },
    {
      id: "resource-5",
      title: "Microservices vs. Monoliths Decision Framework",
      description:
        "A framework to help teams decide between microservices and monolithic architectures based on project requirements.",
      image: "/placeholder.svg?height=400&width=600&text=Architecture+Decision",
      type: "framework",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "2.2 MB",
    },
    {
      id: "resource-6",
      title: "React Component Library Starter",
      description:
        "A starter kit for building and publishing your own React component library with TypeScript, Storybook, and testing setup.",
      image: "/placeholder.svg?height=400&width=600&text=Component+Library",
      type: "template",
      githubUrl: "https://github.com/example/component-library",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "resource-7",
      title: "Web Accessibility Checklist",
      description:
        "A comprehensive checklist for ensuring your web applications are accessible to all users, including those with disabilities.",
      image: "/placeholder.svg?height=400&width=600&text=Accessibility",
      type: "checklist",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "1.5 MB",
    },
    {
      id: "resource-8",
      title: "Introduction to Machine Learning for Web Developers",
      description:
        "A beginner-friendly guide to implementing machine learning features in web applications without a data science background.",
      image: "/placeholder.svg?height=400&width=600&text=ML+for+Web",
      type: "guide",
      downloadUrl: "https://example.com/download",
      fileType: "PDF",
      fileSize: "4.2 MB",
    },
  ] as Resource[],
  videos: [
    {
      id: "video-1",
      title: "Building Scalable React Applications",
      description: "Learn how to structure and organize React applications that can scale to millions of users.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=React+Scaling",
      duration: "45:22",
      url: "https://example.com/video",
    },
    {
      id: "video-2",
      title: "TypeScript for JavaScript Developers",
      description: "A practical introduction to TypeScript for developers who are already familiar with JavaScript.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=TypeScript",
      duration: "38:15",
      url: "https://example.com/video",
    },
    {
      id: "video-3",
      title: "Modern CSS Techniques",
      description: "Explore modern CSS techniques like Grid, Flexbox, and CSS Variables to build responsive layouts.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Modern+CSS",
      duration: "52:10",
      url: "https://example.com/video",
    },
    {
      id: "video-4",
      title: "Introduction to Next.js",
      description: "Learn the basics of Next.js and how to build server-rendered React applications.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Next.js",
      duration: "41:35",
      url: "https://example.com/video",
    },
  ] as VideoResource[],
}

