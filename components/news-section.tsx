"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsCard } from "./news-card"

interface NewsItem {
  id: number
  title_ai: string
  summary: string
  source: string
  country: string
  pub_date: string | null
  link: string
}

interface NewsSectionProps {
  title: string
  emoji: string
  items: NewsItem[]
  isFunding?: boolean
  initialItemsToShow?: number
  loadMoreCount?: number
}

export function NewsSection({
  title,
  emoji,
  items,
  isFunding = false,
  initialItemsToShow = 4,
  loadMoreCount = 4
}: NewsSectionProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [visibleCount, setVisibleCount] = useState(initialItemsToShow)
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, "-")}`

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile && isFunding) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [isFunding])

  const visibleItems = items.slice(0, visibleCount)
  const hasMoreItems = visibleCount < items.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, items.length))
  }

  return (
    <section
      className="rounded-lg border border-border bg-card p-4 md:p-6"
      aria-labelledby={sectionId}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded"
        aria-expanded={isOpen}
        aria-controls={`${sectionId}-content`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl" role="img" aria-hidden="true">{emoji}</span>
          <h2 id={sectionId} className="text-lg font-semibold text-foreground">{title}</h2>
          <span className="text-xs text-muted-foreground" aria-label={`${items.length} articles`}>
            ({items.length})
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          aria-hidden="true"
        />
      </button>
      <div id={`${sectionId}-content`} hidden={!isOpen}>
        {isOpen && (
          <div className="mt-4">
            {items.length === 0 ? (
              <p className="text-xs text-muted-foreground py-4 text-center">No articles yet</p>
            ) : (
              <>
                <div className="divide-y divide-border/50" role="list" aria-label={`${title} articles`}>
                  {visibleItems.map((item) => (
                    <div role="listitem" key={item.id}>
                      <NewsCard
                        title_ai={item.title_ai}
                        summary={item.summary}
                        source={item.source}
                        country={item.country}
                        pub_date={item.pub_date}
                        link={item.link}
                        isFunding={isFunding}
                      />
                    </div>
                  ))}
                </div>
                {hasMoreItems && (
                  <div className="mt-3 flex justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLoadMore}
                      className="text-xs text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Load ${Math.min(loadMoreCount, items.length - visibleCount)} more ${title} articles`}
                    >
                      Load more ({items.length - visibleCount} remaining)
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
