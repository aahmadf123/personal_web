import type { Publication } from "@/lib/content-store"

export const initialPublications: Publication[] = [
  {
    id: "pub-1",
    title: "Optimizing React Performance: A Comprehensive Guide",
    abstract:
      "This paper presents a systematic approach to identifying and resolving performance bottlenecks in React applications, with a focus on rendering optimization and state management.",
    authors: ["John Doe", "Sarah Johnson"],
    date: "October 2023",
    publisher: "Journal of Web Engineering",
    image: "/placeholder.svg?height=400&width=600&text=React+Performance",
    type: "journal",
    link: "https://example.com/publication",
    citation:
      "Doe, J., & Johnson, S. (2023). Optimizing React Performance: A Comprehensive Guide. Journal of Web Engineering, 15(4), 78-92.",
  },
  {
    id: "pub-2",
    title: "Machine Learning for Frontend Developers",
    abstract:
      "An exploration of practical machine learning applications that can be implemented by frontend developers to enhance user experiences without requiring extensive data science expertise.",
    authors: ["John Doe"],
    date: "August 2023",
    publisher: "Frontend Quarterly",
    image: "/placeholder.svg?height=400&width=600&text=ML+for+Frontend",
    type: "magazine",
    link: "https://example.com/publication",
    citation: "Doe, J. (2023). Machine Learning for Frontend Developers. Frontend Quarterly, 8(2), 45-53.",
  },
  {
    id: "pub-3",
    title: "Microservices vs. Monoliths: A Quantitative Analysis",
    abstract:
      "This research paper presents a quantitative comparison of microservices and monolithic architectures across various dimensions including performance, scalability, and development velocity.",
    authors: ["John Doe", "Michael Chen", "Emily Rodriguez"],
    date: "June 2023",
    publisher: "International Conference on Software Architecture",
    image: "/placeholder.svg?height=400&width=600&text=Microservices+Analysis",
    type: "conference",
    link: "https://example.com/publication",
    citation:
      "Doe, J., Chen, M., & Rodriguez, E. (2023). Microservices vs. Monoliths: A Quantitative Analysis. Proceedings of the International Conference on Software Architecture, 112-125.",
  },
  {
    id: "pub-4",
    title: "The State of Web Development in 2023",
    abstract:
      "A comprehensive survey of current trends, technologies, and practices in web development, based on data from over 5,000 developers worldwide.",
    authors: ["John Doe", "Lisa Patel"],
    date: "May 2023",
    publisher: "Web Technologies Research Group",
    image: "/placeholder.svg?height=400&width=600&text=Web+Development+2023",
    type: "whitepaper",
    link: "https://example.com/publication",
    citation: "Doe, J., & Patel, L. (2023). The State of Web Development in 2023. Web Technologies Research Group.",
  },
  {
    id: "pub-5",
    title: "Implementing Secure Authentication in Modern Web Applications",
    abstract:
      "This paper discusses best practices for implementing secure authentication in web applications, covering topics such as OAuth 2.0, JWT, and multi-factor authentication.",
    authors: ["John Doe"],
    date: "March 2023",
    publisher: "Journal of Cybersecurity",
    image: "/placeholder.svg?height=400&width=600&text=Secure+Authentication",
    type: "journal",
    link: "https://example.com/publication",
    citation:
      "Doe, J. (2023). Implementing Secure Authentication in Modern Web Applications. Journal of Cybersecurity, 7(1), 34-49.",
  },
  {
    id: "pub-6",
    title: "Progressive Web Apps: Bridging the Gap Between Web and Native",
    abstract:
      "An analysis of how Progressive Web Apps are changing the landscape of mobile development, with case studies of successful PWA implementations.",
    authors: ["John Doe", "Robert Taylor"],
    date: "January 2023",
    publisher: "Mobile Development Today",
    image: "/placeholder.svg?height=400&width=600&text=Progressive+Web+Apps",
    type: "magazine",
    link: "https://example.com/publication",
    citation:
      "Doe, J., & Taylor, R. (2023). Progressive Web Apps: Bridging the Gap Between Web and Native. Mobile Development Today, 12(1), 22-31.",
  },
  {
    id: "pub-7",
    title: "Serverless Architecture: Patterns and Anti-patterns",
    abstract:
      "This paper identifies common patterns and anti-patterns in serverless architecture, based on an analysis of over 100 production serverless applications.",
    authors: ["John Doe", "David Kim", "Sarah Johnson"],
    date: "November 2022",
    publisher: "Cloud Computing Conference",
    image: "/placeholder.svg?height=400&width=600&text=Serverless+Architecture",
    type: "conference",
    link: "https://example.com/publication",
    citation:
      "Doe, J., Kim, D., & Johnson, S. (2022). Serverless Architecture: Patterns and Anti-patterns. Proceedings of the Cloud Computing Conference, 78-91.",
  },
  {
    id: "pub-8",
    title: "The Impact of TypeScript on Team Productivity",
    abstract:
      "A study measuring the impact of TypeScript adoption on development team productivity, code quality, and bug rates across 20 software teams.",
    authors: ["John Doe"],
    date: "September 2022",
    publisher: "Software Engineering Institute",
    image: "/placeholder.svg?height=400&width=600&text=TypeScript+Productivity",
    type: "whitepaper",
    link: "https://example.com/publication",
    citation: "Doe, J. (2022). The Impact of TypeScript on Team Productivity. Software Engineering Institute.",
  },
]

