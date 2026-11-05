"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

// A section counts as current once its top passes this line (nav height + breathing room).
const SPY_LINE = 128

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  // After a nav click, hold that link active while the smooth scroll runs: on tall screens the
  // last sections can't reach the spy line, so the scroll position alone would pick a neighbor.
  const clickLock = useRef<{ id: string; until: number } | null>(null)

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 8)
      const lock = clickLock.current
      if (lock && Date.now() < lock.until) {
        setActiveSection(lock.id)
        return
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActiveSection(navItems[navItems.length - 1].id)
        return
      }
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= SPY_LINE) current = id
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close()
    }
    const desktop = window.matchMedia("(min-width: 768px)")
    desktop.addEventListener("change", close)
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      desktop.removeEventListener("change", close)
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    clickLock.current = { id, until: Date.now() + 1000 }
    setActiveSection(id)
    setMenuOpen(false)
  }

  const linkClass = (id: string) =>
    activeSection === id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        menuOpen
          ? "bg-background border-border"
          : scrolled
            ? "bg-background/85 backdrop-blur-md border-border/70"
            : "bg-background/80 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap"
        >
          Tanush Chintala
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`text-sm transition-colors ${linkClass(item.id)}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden -mr-2 inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-accent transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!menuOpen} className="md:hidden border-t border-border">
        <ul className="max-w-5xl mx-auto px-3 py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={`block rounded-md px-3 py-3 text-base transition-colors hover:bg-accent ${linkClass(item.id)}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
