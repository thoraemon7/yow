"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsCard } from "./news-card"

interface NewsItem {
  id: string
  date: string
  flag: string
  headline: string
  source: string
  sourceUrl: string
}

interface NewsSectionProps {
  title: string
  emoji: string
  items: NewsItem[]
  defaultOpen?: boolean
  defaultOpenMobile?: boolean
  initialItemsToShow?: number
  loadMoreCount?: number
}

export function NewsSection({ 
  title, 
  emoji, 
  items, 
  defaultOpen = true, 
  defaultOpenMobile,
  initialItemsToShow = 4,
  loadMoreCount = 4
}: NewsSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [visibleCount, setVisibleCount] = useState(initialItemsToShow)
  
  useEffect(() => {
    if (defaultOpenMobile !== undefined) {
      const isMobile = window.innerWidth < 768
      setIsOpen(isMobile ? defaultOpenMobile : defaultOpen)
    }
  }, [defaultOpen, defaultOpenMobile])

  const visibleItems = items.slice(0, visibleCount)
  const hasMoreItems = visibleCount < items.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, items.length))
  }

  return (
    <section className="rounded-lg border border-border bg-card p-4 md:p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl" role="img" aria-hidden="true">{emoji}</span>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`} 
        />
      </button>
      {isOpen && (
        <div className="mt-4">
          <div className="divide-y divide-border/50">
            {visibleItems.map((item) => (
              <NewsCard
                key={item.id}
                date={item.date}
                flag={item.flag}
                headline={item.headline}
                source={item.source}
                sourceUrl={item.sourceUrl}
              />
            ))}
          </div>
          {hasMoreItems && (
            <div className="mt-3 flex justify-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLoadMore}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Load more ({items.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
