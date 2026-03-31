"use client"

import { useCallback, useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

const STORAGE_KEY = "rede-grow-theme"

type Theme = "light" | "dark"

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      return
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return
    }
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }, [])

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="flex h-10 w-10 p-2 items-center justify-center rounded-full bg-transparent text-neutral-800 hover:bg-black/5 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6" aria-hidden="true" />
      )}
    </Button>
  )
}

export default ThemeToggle