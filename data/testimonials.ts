import type { Testimonial } from "@/lib/content-store"

export const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStart Inc.",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "John is one of the most talented developers I've had the pleasure of working with. His ability to solve complex problems while maintaining clean, maintainable code is exceptional. He consistently delivered high-quality work ahead of schedule and was always willing to help other team members.",
    category: "professional",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer at InnovateSoft",
    company: "InnovateSoft",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with John on our cloud migration project was a game-changer. His deep understanding of cloud architecture and best practices helped us reduce costs by 40% while improving system reliability. He's not just technically skilled but also great at explaining complex concepts to non-technical stakeholders.",
    category: "professional",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager at DataViz",
    company: "DataViz",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "John's contributions to our product team went far beyond writing code. He brought valuable insights to our planning sessions and helped bridge the gap between design and development. His user-focused approach to engineering made our product significantly better.",
    category: "professional",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "AI Solutions",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As a non-technical founder, finding the right developer for my startup was crucial. John not only built our MVP but also helped shape the product strategy. His technical expertise combined with business acumen made him an invaluable partner in our early stages.",
    category: "client",
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "E-commerce Director",
    company: "RetailNow",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "John redesigned our e-commerce platform, resulting in a 35% increase in conversion rates and a significant improvement in user satisfaction. He was responsive, professional, and delivered exactly what we needed. I wouldn't hesitate to work with him again.",
    category: "client",
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Marketing Director",
    company: "GrowthMarketing",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "John developed a custom analytics dashboard for our marketing team that transformed how we track campaign performance. His attention to detail and understanding of our specific needs resulted in a tool that we use daily. He's a true professional who delivers exceptional results.",
    category: "client",
  },
  {
    id: 7,
    name: "Alex Wong",
    role: "CS Student",
    company: "University of Technology",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "John's mentorship was instrumental in my development as a programmer. He patiently guided me through complex concepts and provided valuable feedback on my projects. His teaching style made difficult topics accessible and helped me build confidence in my abilities.",
    category: "mentorship",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    role: "Junior Developer",
    company: "CodeCraft",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As a junior developer, having John as a mentor accelerated my growth tremendously. He provided thoughtful code reviews that helped me improve and was always willing to pair program on challenging tasks. His guidance helped me advance my career faster than I thought possible.",
    category: "mentorship",
  },
]

