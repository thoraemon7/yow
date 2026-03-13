"use client"

import { CircleHelp, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <a href="#funding" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Funding
            </a>
            <a href="#economic" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Economic
            </a>
            <a href="#regional" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Regional
            </a>
            <a href="#vc-pe-ipo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              VC/PE/IPO
            </a>
            <a href="#tech-giants" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tech Giants
            </a>
            <a href="#opinions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Reports
            </a>
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10">
              <CircleHelp className="h-4 w-4" />
              <span className="sr-only">About</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#funding"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ⭐ Funding News 2026
              </a>
              <a
                href="#economic"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                🌐 Economic News
              </a>
              <a
                href="#regional"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                🗞️ Regional News
              </a>
              <a
                href="#vc-pe-ipo"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                📈 VC, PE & IPO News
              </a>
              <a
                href="#tech-giants"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                🦄 Tech Giant News
              </a>
              <a
                href="#opinions"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                📄 Opinions & Reports
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
