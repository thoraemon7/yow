import { DashboardHeader } from "@/components/dashboard-header"
import { NewsDashboardClient } from "@/components/news-dashboard-client"

const SUPABASE_URL = "https://imvidxkubfgrcfmmdexx.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdmlkeGt1YmZncmNmbW1kZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNzE3MDAsImV4cCI6MjA4ODk0NzcwMH0.Ty7wNHg4-GU7gh4bHYGO2oLqCNHBuLJIViJiBJSbN7Q"

export type Article = {
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

async function fetchArticles(): Promise<Article[]> {
  try {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const headers = {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    }
    const [regular, devMessages] = await Promise.all([
      fetch(
        `${SUPABASE_URL}/rest/v1/articles?select=id,title_ai,summary,source,country,pub_date,link,section,created_at&section=neq.NOT_RELEVANT&section=neq.Dev_Messages&created_at=gte.${since}&order=created_at.desc&limit=300`,
        { headers, next: { revalidate: 900 } }
      ).then(r => r.json()),
      fetch(
        `${SUPABASE_URL}/rest/v1/articles?select=id,title_ai,summary,source,country,pub_date,link,section,created_at&section=eq.Dev_Messages&order=created_at.desc`,
        { headers, next: { revalidate: 900 } }
      ).then(r => r.json()),
    ])
    return [...regular, ...devMessages]
  } catch {
    return []
  }
}

export default async function NewsDashboard() {
  const articles = await fetchArticles()
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <NewsDashboardClient articles={articles} />
    </div>
  )
}
