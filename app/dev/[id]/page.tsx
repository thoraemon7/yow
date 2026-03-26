import { DashboardHeader } from "@/components/dashboard-header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const SUPABASE_URL = "https://imvidxkubfgrcfmmdexx.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdmlkeGt1YmZncmNmbW1kZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNzE3MDAsImV4cCI6MjA4ODk0NzcwMH0.Ty7wNHg4-GU7gh4bHYGO2oLqCNHBuLJIViJiBJSbN7Q"

async function fetchMessage(id: string) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/articles?id=eq.${id}&section=eq.Dev_Messages&select=*`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 900 },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch {
    return null
  }
}

export default async function DevMessagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const message = await fetchMessage(id)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to SeaCatBot
        </Link>

        {!message ? (
          <div className="text-center py-24">
            <span className="text-4xl mb-4 block">📭</span>
            <p className="text-muted-foreground">Message not found.</p>
          </div>
        ) : (
          <article className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl" role="img" aria-label="envelope">✉️</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Message from the Dev</span>
            </div>

            <h1 className="text-xl font-bold text-foreground leading-snug mb-4">
              {message.title_ai}
            </h1>

            {message.pub_date && (
              <time
                className="text-xs text-muted-foreground block mb-6"
                dateTime={message.pub_date}
              >
                {new Date(message.pub_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            )}

            <div className="prose prose-sm prose-invert max-w-none">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {message.summary}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground italic">
                🐱 SeaCatBot — Automated SEA Startup News
              </p>
            </div>
          </article>
        )}
      </main>
    </div>
  )
}
