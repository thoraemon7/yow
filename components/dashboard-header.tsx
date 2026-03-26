"use client"

import { CircleHelp, Menu, X } from "lucide-react"
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
              className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
              )}
            </button>
            <a
              href="https://seacatbot.com"
              className="text-lg font-bold tracking-tight text-foreground md:text-xl hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="SeaCatBot home"
            >
              WELCOME TO <span className="text-primary">SCB</span>🐱
            </a>
          </div>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Section navigation">
            <a href="#funding-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">Funding</a>
            <a href="#economic-indicators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">Economic</a>
            <a href="#regional-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">Regional</a>
            <a href="#vc-pe-ipo-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">VC/PE/IPO</a>
            <a href="#tech-giants-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">Tech Giants</a>
            <a href="#opinions-blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded">Reports</a>
          </nav>

          <div className="flex items-center gap-1">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setShowAbout(!showAbout)}
                aria-label="About SeaCatBot"
                aria-expanded={showAbout}
                aria-controls="about-popout"
              >
                <CircleHelp className="h-4 w-4" aria-hidden="true" />
              </Button>
              {showAbout && (
                <div
                  id="about-popout"
                  className="absolute right-0 top-10 z-50 w-72 rounded-lg border border-border bg-card p-4 shadow-lg"
                  role="dialog"
                  aria-label="About SeaCatBot"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      🐱 This site is automated to update daily, with a cat monitoring its content. It spits out and curates Start-Up news from the Southeast Asia region especially Indonesia, Singapore, Vietnam, and Philippines.
                    </p>
                    <button
                      onClick={() => setShowAbout(false)}
                      className="shrink-0 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      aria-label="Close about panel"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-nav" className="border-t border-border py-4 lg:hidden" aria-label="Mobile section navigation">
            <div className="flex flex-col gap-3">
              <a href="#funding-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>⭐ Funding News</a>
              <a href="#economic-indicators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🌐 Economic News</a>
              <a href="#regional-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🗞️ Regional News</a>
              <a href="#vc-pe-ipo-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>📈 VC, PE & IPO News</a>
              <a href="#tech-giants-news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>🦄 Tech Giants News</a>
              <a href="#opinions-blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>📄 Opinions & Reports</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
