"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { NewsSection } from "./news-section"
import { NewsCard } from "./news-card"
import type { Article } from "@/app/page"

const SECTION_CONFIG = [
  { key: "Funding_News",        label: "Funding News",       emoji: "⭐", isFunding: true,  initialItems: 4  },
  { key: "Economic_Indicators", label: "Economic News",      emoji: "🌐", isFunding: false, initialItems: 10 },
  { key: "Regional_News",       label: "Regional News",      emoji: "🗞️", isFunding: false, initialItems: 10 },
  { key: "VC_PE_IPO_News",      label: "VC, PE & IPO News",  emoji: "📈", isFunding: false, initialItems: 4  },
  { key: "Tech_Giants_News",    label: "Tech Giants News",   emoji: "🦄", isFunding: false, initialItems: 4  },
  { key: "Opinions_Blogs",      label: "Opinions & Reports", emoji: "📄", isFunding: false, initialItems: 4  },
] as const
] as const

interface Props {
  articles: Article[]
}

export function NewsDashboardClient({ articles }: Props) {
  const [query, setQuery] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [popout, setPopout] = useState<"process" | "disclaimer" | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  // Sort articles by pub_date descending
  const sorted = [...articles].sort((a, b) => {
    const dateA = a.pub_date ?? a.created_at
    const dateB = b.pub_date ?? b.created_at
    return dateB.localeCompare(dateA)
  })

  const trimmed = query.trim().toLowerCase()
  const isSearching = trimmed.length > 0

  const filtered = isSearching
    ? sorted.filter(
        (a) =>
          a.title_ai?.toLowerCase().includes(trimmed) ||
          a.summary?.toLowerCase().includes(trimmed) ||
          a.source?.toLowerCase().includes(trimmed) ||
          a.country?.toLowerCase().includes(trimmed)
      )
    : []

  const bySection: Record<string, Article[]> = {}
  for (const article of sorted) {
    if (!bySection[article.section]) bySection[article.section] = []
    bySection[article.section].push(article)
  }

  const handleClose = () => {
    setQuery("")
    setSearchOpen(false)
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 md:py-8">
      {/* Header row */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <span role="img" aria-label="astronaut cat">🐱‍🚀</span> SEA Startup News
            </h2>
            {articles.length > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              {articles.length} articles from the last 7 days
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-3">
            <button onClick={() => setPopout(popout === "process" ? null : "process")} className="text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">Process</button>
            <button onClick={() => setPopout(popout === "disclaimer" ? null : "disclaimer")} className="text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">Disclaimer</button>
            <a href="https://tally.so/r/ODADP7" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">Suggest Site</a>
          </div>
          {popout && (
            <div className="mt-3 max-w-md rounded-lg border border-border bg-card p-4 relative">
              <button onClick={() => setPopout(null)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
                <X className="h-3 w-3" />
              </button>
              {popout === "process" && (
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  🇮🇩 🇸🇬 🇻🇳 🇵🇭 This site is automated to update daily, with a cat monitoring its content. It spits out and curates Start-Up news from the Southeast Asia region especially ID, SG, VN, PH.
                </p>
              )}
              {popout === "disclaimer" && (
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  We only use publicly available information - Support quality journalism — click the link to read the full article and do subscribe to their contents!
                </p>
              )}
            </div>
          )}
          </div>

          {/* Search toggle */}
          <div className="flex items-center gap-2 mt-1">
            {searchOpen ? (
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-48 md:w-64"
                />
                <button onClick={handleClose} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">Search</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search results */}
      {isSearching ? (
        <div>
          <p className="mb-4 text-xs text-muted-foreground">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{query}&quot;
          </p>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-4xl mb-4">🔍</span>
              <p className="text-muted-foreground text-sm">No articles match your search.</p>
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card divide-y divide-border/50 px-4">
              {filtered.map((item) => (
                <NewsCard
                  key={item.id}
                  title_ai={item.title_ai}
                  source={item.source}
                  country={item.country}
                  pub_date={item.pub_date}
                  link={item.link}
                  isFunding={item.section === "Funding_News"}
                />
              ))}
            </div>
          )}
        </div>
      ) : articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="text-4xl mb-4">📭</span>
          <p className="text-muted-foreground text-sm">No articles found. The bot may still be warming up.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SECTION_CONFIG.map(({ key, label, emoji, isFunding }) => {
            const items = bySection[key] ?? []
            return (
              <div key={key} id={key.toLowerCase().replace(/_/g, "-")}>
                <NewsSection
                    title={label}
                    emoji={emoji}
                    items={items}
                    isFunding={isFunding}
                    initialItemsToShow={initialItems}
                  />
              </div>
            )
          })}
        </div>
      )}

      <footer className="mt-12 border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
            Auto-updated at 8:55 AM & 3:00 PM WIB · Powered by SeaCatBot
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 italic">
            SCB curates publicly available news and reports. All articles belong to their original publishers. Click through to support original journalism.
          </p>
      </footer>
    </main>
  )
}
