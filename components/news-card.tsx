import { ArrowUpRight } from "lucide-react"

interface NewsCardProps {
  date: string
  flag: string
  headline: string
  source: string
  sourceUrl: string
}

export function NewsCard({ date, flag, headline, source, sourceUrl }: NewsCardProps) {
  return (
    <article className="group relative border-b border-border/50 py-2 transition-colors hover:bg-secondary/50">
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-start gap-2.5">
          <div className="flex shrink-0 flex-col items-center">
            <span className="text-base" role="img" aria-label="country flag">
              {flag}
            </span>
            <time className="text-[10px] text-muted-foreground whitespace-nowrap">{date}</time>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
              {headline}
            </h3>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{source}</p>
          </div>
          <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </a>
    </article>
  )
}
