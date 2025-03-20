import type { Award } from "@/lib/content-store"

export const initialAwards: Award[] = [
  {
    id: "award-1",
    title: "Outstanding Technical Achievement",
    organization: "Tech Innovation Awards",
    date: "November 2023",
    description:
      "Recognized for developing an innovative cloud architecture solution that reduced infrastructure costs by 40% while improving system reliability and performance.",
    image: "/placeholder.svg?height=200&width=200&text=Tech+Innovation",
    category: "professional",
  },
  {
    id: "award-2",
    title: "Best Open Source Contribution",
    organization: "Open Source Summit",
    date: "September 2023",
    description:
      "Awarded for significant contributions to the React ecosystem, including the development of a widely-adopted state management library used by thousands of developers worldwide.",
    image: "/placeholder.svg?height=200&width=200&text=Open+Source",
    category: "community",
  },
  {
    id: "award-3",
    title: "Excellence in Web Development",
    organization: "WebDev Conference",
    date: "July 2023",
    description:
      "Recognized for pioneering work in progressive web applications and advancing the state of the art in web development practices.",
    image: "/placeholder.svg?height=200&width=200&text=WebDev",
    category: "professional",
  },
  {
    id: "award-4",
    title: "Distinguished Speaker",
    organization: "TechTalks Global",
    date: "May 2023",
    description:
      "Awarded for exceptional presentations on software architecture and design patterns that received the highest attendee ratings at the conference.",
    image: "/placeholder.svg?height=200&width=200&text=TechTalks",
    category: "speaking",
  },
  {
    id: "award-5",
    title: "Technical Mentor of the Year",
    organization: "Dev Community Alliance",
    date: "March 2023",
    description:
      "Recognized for outstanding mentorship of junior developers and significant contributions to developer education and career advancement.",
    image: "/placeholder.svg?height=200&width=200&text=Mentor",
    category: "community",
  },
  {
    id: "award-6",
    title: "Innovation in AI Applications",
    organization: "AI Summit",
    date: "December 2022",
    description:
      "Awarded for developing a novel approach to integrating machine learning capabilities into web applications that significantly improved user experiences.",
    image: "/placeholder.svg?height=200&width=200&text=AI+Summit",
    category: "professional",
  },
  {
    id: "award-7",
    title: "Outstanding Research Paper",
    organization: "International Conference on Software Engineering",
    date: "October 2022",
    description:
      "Recognized for the research paper 'Microservices vs. Monoliths: A Quantitative Analysis' which provided valuable insights for the software architecture community.",
    image: "/placeholder.svg?height=200&width=200&text=ICSE",
    category: "academic",
  },
  {
    id: "award-8",
    title: "Community Leadership Award",
    organization: "Tech Community Foundation",
    date: "August 2022",
    description:
      "Awarded for organizing and leading a series of workshops and meetups that helped hundreds of developers advance their skills and careers.",
    image: "/placeholder.svg?height=200&width=200&text=Community",
    category: "community",
  },
]

