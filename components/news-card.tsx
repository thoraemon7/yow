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

function countryToFlag(code: string): string {
  if (!code || code.length !== 2) return "\uD83C\uDF0F"
  try {
    const chars = code.toUpperCase().split("")
    return chars.map((c) => String.fromCodePoint(127397 + c.charCodeAt(0))).join("")
  } catch {
    return "\uD83C\uDF0F"
  }
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ""
  try {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" })
  } catch {
    return ""
  }
}

export function NewsCard(props: NewsCardProps) {
  const flag = countryToFlag(props.country)
  const date = formatDate(props.pub_date)

  return (
    <article className="group relative border-b border-border/50 py-3 transition-colors hover:bg-secondary/40">
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-start gap-2.5">
          <div className="flex shrink-0 flex-col items-center gap-0.5 pt-0.5 min-w-[28px]">
            <span className="text-base leading-none">{flag}</span>
            {date && (
              <time className="text-[9px] text-muted-foreground whitespace-nowrap">{date}</time>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {props.title_ai}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground/70 font-medium">{props.source}</p>
          </div>
          <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mt-0.5" />
        </div>
      </a>
    </article>
  )
}
