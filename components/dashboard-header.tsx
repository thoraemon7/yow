"use client"

import { CircleHelp, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between md:h-16">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
            <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              <span className="text-primary">SEACATBOT</span>.COM
            </h1>
          </div>

          <nav className="hidden items-center gap-4 lg:flex">
            <a href="#funding-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Funding</a>
            <a href="#vc-pe-ipo-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">VC/PE/IPO</a>
            <a href="#regional-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Regional</a>
            <a href="#economic-indicators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Economic</a>
            <a href="#tech-giants-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tech Giants</a>
            <a href="#opinions-blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Reports</a>
          </nav>

          <div className="flex items-center gap-1">
            <div className="relative">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10" onClick={() => setShowAbout(!showAbout)}>
                <CircleHelp className="h-4 w-4" />
                <span className="sr-only">About</span>
              </Button>
              {showAbout && (
                <div className="absolute right-0 top-10 z-50 w-72 rounded-lg border border-border bg-card p-4 shadow-lg">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      🐱 This site is automated to update daily, with a cat monitoring its content. It spits out and curates Start-Up news from the Southeast Asia region especially Indonesia, Singapore, Vietnam, and Philippines.
                    </p>
                    <button onClick={() => setShowAbout(false)} className="shrink-0 text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <a href="#funding-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>⭐ Funding News</a>
              <a href="#vc-pe-ipo-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>📈 VC, PE & IPO</a>
              <a href="#regional-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🗞️ Regional News</a>
              <a href="#economic-indicators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🌐 Economic Indicators</a>
              <a href="#tech-giants-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🦄 Tech Giants</a>
              <a href="#opinions-blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>📄 Opinions & Reports</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
