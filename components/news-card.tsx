"use client"

import { ArrowUpRight } from "lucide-react"

interface NewsCardProps {
  title_ai: string
  summary: string
  source: string
  country: string
  pub_date: string | null
  link: string
}

const countryToFlag = (code: string): string => {
  if (!code || code.length !== 2) return "🌏"
  try {
    return code
      .toUpperCase()
      .split("")
      .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
      .join("")
  } catch {
    return "🌏"
  }
}

const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return ""
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  } catch {
    return ""
  }
}

export function NewsCard({ title_ai, summary, source, country, pub_date, link }: NewsCardProps) {
  const flag = countryToFlag(country)
  const date = formatDate(pub_date)

  return (
    <article className="group relative border-b border-border/50 py-3 transition-colors hover:bg-secondary/40">
      
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-start gap-2.5">
          <div className="flex shrink-0 flex-col items-center gap-0.5 pt-0.5 min-w-[28px]">
            <span className="text-base leading-none" role="img" aria-label="country flag">
              {flag}
            </span>
            {date && (
              <time className="text-[9px] text-muted-foreground whitespace-nowrap">{date}</time>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title_ai}
            </h3>
            {summary && (
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
                {summary}
              </p>
            )}
            <p className="mt-1 text-[10px] text-muted-foreground/70 font-medium">{source}</p>
          </div>
          <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mt-0.5" />
        </div>
      </a>
    </article>
  )
}
