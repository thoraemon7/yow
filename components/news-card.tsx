"use client"

import { ArrowUpRight } from "lucide-react"

interface NewsCardProps {
  title_ai: string
  source: string
  country: string
  pub_date: string | null
  link: string
  isFunding?: boolean
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
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return ""
    const day = d.getUTCDate()
    const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" })
    const year = d.getUTCFullYear()
    return `${day} ${month} ${year}`
  } catch {
    return ""
  }
}

export function NewsCard(props: NewsCardProps) {
  const date = formatDate(props.pub_date)
  const countryCode = props.country?.toUpperCase() || "?"
  const today = new Date().toISOString().split("T")[0]
  const isToday = props.pub_date === today

  return (
    <article className="group relative border-b border-border/50 py-3 transition-colors hover:bg-secondary/40">
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-start gap-3">
          <div className="flex shrink-0 flex-col items-center gap-0.5 pt-0.5 min-w-[36px]">
            {props.isFunding ? (
              <span className="text-lg leading-none">{countryToFlag(props.country)}</span>
            ) : (
              <span className="text-[11px] font-bold text-foreground leading-none tracking-wide">
                {countryCode}
              </span>
            )}
            {date && (
              <time className="text-[9px] text-muted-foreground text-center leading-tight mt-0.5">
                {date}
              </time>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {props.title_ai}{isToday && <span className="ml-1 text-xs">🆕</span>}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground/70 font-medium">{props.source}</p>
          </div>
          <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mt-1" />
        </div>
      </a>
    </article>
  )
}
