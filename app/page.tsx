import { DashboardHeader } from "@/components/dashboard-header"
import { NewsSection } from "@/components/news-section"

const SUPABASE_URL = "https://imvidxkubfgrcfmmdexx.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdmlkeGt1YmZncmNmbW1kZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNzE3MDAsImV4cCI6MjA4ODk0NzcwMH0.Ty7wNHg4-GU7gh4bHYGO2oLqCNHBuLJIViJiBJSbN7Q"

type Article = {
  id: number
  title_ai: string
  summary: string
  source: string
  country: string
  pub_date: string | null
  link: string
  section: string
  created_at: string
}

const SECTION_CONFIG = [
  { key: "Funding_News",        label: "Funding News",       emoji: "⭐", isFunding: true  },
  { key: "Economic_Indicators", label: "Economic News",      emoji: "🌐", isFunding: false },
  { key: "Regional_News",       label: "Regional News",      emoji: "🗞️", isFunding: false },
  { key: "VC_PE_IPO_News",      label: "VC, PE & IPO News",  emoji: "📈", isFunding: false },
  { key: "Tech_Giants_News",    label: "Tech Giants News",   emoji: "🦄", isFunding: false },
  { key: "Opinions_Blogs",      label: "Opinions & Reports", emoji: "📄", isFunding: false },
] as const

async function fetchArticles(): Promise<Article[]> {
  try {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const url = `${SUPABASE_URL}/rest/v1/articles?select=id,title_ai,summary,source,country,pub_date,link,section,created_at&section=neq.NOT_RELEVANT&created_at=gte.${since}&order=created_at.desc&limit=300`

    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      next: { revalidate: 900 },
    })

    if (!res.ok) {
      console.error("Supabase fetch failed:", res.status, await res.text())
      return []
    }

    return res.json()
  } catch (err) {
    console.error("fetchArticles error:", err)
    return []
  }
}

export default async function NewsDashboard() {
  const articles = await fetchArticles()

const bySection: Record<string, Article[]> = {}
  for (const article of articles) {
    if (!bySection[article.section]) bySection[article.section] = []
    bySection[article.section].push(article)
  }
  for (const section in bySection) {
    bySection[section].sort((a, b) => {
      const dateA = a.pub_date ?? a.created_at
      const dateB = b.pub_date ?? b.created_at
      return dateB.localeCompare(dateA)
    })
  }

  const totalArticles = articles.length

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <p className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <span role="img" aria-label="astronaut cat">🐱‍🚀</span> Southeast Asian Startup News
          </h2>
          {totalArticles > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              {totalArticles} articles from the last 7 days
            </p>
          )}
        </div>

        {totalArticles === 0 ? (
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
        </footer>
      </main>
    </div>
  )
}
