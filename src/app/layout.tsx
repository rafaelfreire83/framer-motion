"use client"

import './globals.css'

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
        <body
          className={`bg-white text-gray-800 dark:bg-gray-900 dark:text-white `}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
