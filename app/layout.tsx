import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { AdminPanel } from "@/components/admin-panel"
import { ClientPageTransitionWrapper } from "@/components/animations/client-wrappers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Doe - Personal Website",
  description: "Professional portfolio and personal website of John Doe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <Navbar />
          <ClientPageTransitionWrapper>{children}</ClientPageTransitionWrapper>
          <AdminPanel />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'