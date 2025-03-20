"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedImage } from "@/components/ui/animated-image"
import { ClientFadeIn, ClientSlideIn, ClientScrollAnimation } from "@/components/animations/client-wrappers"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <ClientFadeIn className="flex flex-col justify-center space-y-4" delay={0.2}>
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    John Doe
                  </motion.h1>
                  <motion.p
                    className="text-xl text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Software Engineer & Computer Science Graduate
                  </motion.p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <AnimatedButton className="w-full min-[400px]:w-auto">About Me</AnimatedButton>
                  </Link>
                  <Link href="/projects">
                    <AnimatedButton className="w-full min-[400px]:w-auto" variant="outline">
                      View Projects
                    </AnimatedButton>
                  </Link>
                </div>
                <motion.div
                  className="flex items-center gap-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <AnimatedButton variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </AnimatedButton>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <AnimatedButton variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </AnimatedButton>
                  </Link>
                  <Link href="mailto:contact@example.com">
                    <AnimatedButton variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </ClientFadeIn>
              <ClientSlideIn direction="left" className="flex items-center justify-center" delay={0.4}>
                <motion.div
                  className="relative aspect-square overflow-hidden rounded-full border w-[300px] h-[300px]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <AnimatedImage
                    src="/placeholder.svg?height=600&width=600"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                    animateOnHover={false}
                  />
                </motion.div>
              </ClientSlideIn>
            </div>
          </div>
        </section>

        <ClientScrollAnimation className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out some of my recent work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="aspect-video overflow-hidden">
                    <AnimatedImage
                      src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                      alt={`Project ${i}`}
                      width={600}
                      height={400}
                      className="object-cover"
                      animateOnHover={true}
                      hoverScale={1.08}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">Project Title {i}</h3>
                    <p className="text-muted-foreground">
                      A brief description of this project and the technologies used.
                    </p>
                    <Link href={`/projects/project-${i}`}>
                      <AnimatedButton className="mt-4" variant="outline">
                        View Details
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <AnimatedButton variant="outline">View All Projects</AnimatedButton>
              </Link>
            </div>
          </div>
        </ClientScrollAnimation>

        <ClientScrollAnimation className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Skills</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My academic background and technical expertise
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">Education</h3>
                <div className="space-y-4">
                  <motion.div
                    className="space-y-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-xl font-semibold">Master of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University Name, 2020-2022</p>
                    <p>GPA: 3.9/4.0</p>
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University Name, 2016-2020</p>
                    <p>GPA: 3.8/4.0</p>
                  </motion.div>
                </div>
                <Link href="/education">
                  <AnimatedButton variant="outline" className="mt-2">
                    View Detailed Coursework
                  </AnimatedButton>
                </Link>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Programming Languages</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        JavaScript/TypeScript
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        Python
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        Java
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        C/C++
                      </motion.li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Frameworks & Tools</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        React/Next.js
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        Node.js
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        Django
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        Docker
                      </motion.li>
                    </ul>
                  </div>
                </div>
                <Link href="/skills">
                  <AnimatedButton variant="outline" className="mt-2">
                    View All Skills
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </ClientScrollAnimation>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <AnimatedButton variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </AnimatedButton>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <AnimatedButton variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </AnimatedButton>
            </Link>
            <Link href="mailto:contact@example.com">
              <AnimatedButton variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

