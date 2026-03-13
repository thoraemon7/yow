import { DashboardHeader } from "@/components/dashboard-header"
import { NewsSection } from "@/components/news-section"

// Country code to flag emoji converter
const countryToFlag = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

const fundingNews2026 = [
  {
    id: "1",
    date: "Mar 13",
    flag: countryToFlag("US"),
    headline: "OpenAI closes $6.6B funding round at $157B valuation, largest private raise ever",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: countryToFlag("GB"),
    headline: "Revolut secures $1.5B secondary funding, becomes Europe's most valuable startup",
    source: "Financial Times",
    sourceUrl: "https://ft.com",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: countryToFlag("DE"),
    headline: "Berlin-based Celonis raises $400M Series E for process mining platform",
    source: "Bloomberg",
    sourceUrl: "https://bloomberg.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: countryToFlag("SG"),
    headline: "Grab invests $250M in Indonesian logistics startup for regional expansion",
    source: "Reuters",
    sourceUrl: "https://reuters.com",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: countryToFlag("FR"),
    headline: "Mistral AI raises $640M Series B, challenges OpenAI in enterprise market",
    source: "Les Echos",
    sourceUrl: "https://lesechos.fr",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: countryToFlag("ID"),
    headline: "GoTo secures $300M credit facility to expand fintech operations",
    source: "Jakarta Post",
    sourceUrl: "https://thejakartapost.com",
  },
  {
    id: "7",
    date: "Mar 7",
    flag: countryToFlag("US"),
    headline: "Databricks closes $500M extension at $55B valuation ahead of IPO",
    source: "Forbes",
    sourceUrl: "https://forbes.com",
  },
  {
    id: "8",
    date: "Mar 6",
    flag: countryToFlag("IN"),
    headline: "Zerodha founder backs $100M fund for Indian SaaS startups",
    source: "Mint",
    sourceUrl: "https://livemint.com",
  },
]

const economicNews = [
  {
    id: "1",
    date: "Mar 13",
    flag: "🇺🇸",
    headline: "US CPI rises 2.4% year-over-year, below economist expectations of 2.6%",
    source: "Wall Street Journal",
    sourceUrl: "https://wsj.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: "🇪🇺",
    headline: "Eurozone unemployment falls to record low 6.2%, labor market tightens",
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: "🇨🇳",
    headline: "China manufacturing PMI expands for fifth consecutive month, signals recovery",
    source: "South China Morning Post",
    sourceUrl: "https://scmp.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: "🇬🇧",
    headline: "UK GDP grows 0.6% in Q4, outpacing European peers amid services boom",
    source: "BBC News",
    sourceUrl: "https://bbc.com/news",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: "🇯🇵",
    headline: "Japan core inflation falls to 2.1%, BOJ maintains dovish stance",
    source: "Nikkei",
    sourceUrl: "https://nikkei.com",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: "🇮🇳",
    headline: "India GDP growth forecast raised to 7.2% by RBI, leads major economies",
    source: "Economic Times",
    sourceUrl: "https://economictimes.com",
  },
  {
    id: "7",
    date: "Mar 7",
    flag: "🇧🇷",
    headline: "Brazil central bank cuts rates by 50bps, signals further easing",
    source: "Reuters",
    sourceUrl: "https://reuters.com",
  },
]

const regionalNews = [
  {
    id: "1",
    date: "Mar 13",
    flag: "🇯🇵",
    headline: "Bank of Japan signals potential rate hike amid strengthening yen, markets react",
    source: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: "🇧🇷",
    headline: "Brazil announces $50B infrastructure investment plan for Amazon region",
    source: "Reuters",
    sourceUrl: "https://reuters.com",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: "🇮🇳",
    headline: "India's tech sector posts record Q1 exports, government plans new incentives",
    source: "Economic Times",
    sourceUrl: "https://economictimes.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: "🇦🇺",
    headline: "Australia signs landmark trade deal with Southeast Asian nations",
    source: "Sydney Morning Herald",
    sourceUrl: "https://smh.com.au",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: "🇻🇳",
    headline: "Vietnam FDI inflows surge 25% YoY as manufacturers diversify from China",
    source: "VnExpress",
    sourceUrl: "https://vnexpress.net",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: "🇲🇽",
    headline: "Mexico nearshoring boom continues, manufacturing exports hit record",
    source: "El Financiero",
    sourceUrl: "https://elfinanciero.com.mx",
  },
]

const vcPeIpoNews = [
  {
    id: "1",
    date: "Mar 13",
    flag: "🇺🇸",
    headline: "Stripe confidentially files for IPO, expected to be largest tech listing of 2026",
    source: "Bloomberg",
    sourceUrl: "https://bloomberg.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: "🇸🇪",
    headline: "EQT Partners closes $25B flagship fund, largest European PE raise this year",
    source: "Private Equity International",
    sourceUrl: "https://privateequityinternational.com",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: "🇺🇸",
    headline: "Andreessen Horowitz launches $4.5B AI-focused venture fund",
    source: "The Information",
    sourceUrl: "https://theinformation.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: "🇭🇰",
    headline: "Shein IPO in Hong Kong faces regulatory scrutiny, delays expected",
    source: "South China Morning Post",
    sourceUrl: "https://scmp.com",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: "🇺🇸",
    headline: "Sequoia Capital spins off China unit, restructures global operations",
    source: "Wall Street Journal",
    sourceUrl: "https://wsj.com",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: "🇸🇬",
    headline: "Temasek leads $800M round in Southeast Asian super app",
    source: "DealStreetAsia",
    sourceUrl: "https://dealstreetasia.com",
  },
]

const techGiantNews = [
  {
    id: "1",
    date: "Mar 13",
    flag: "🇺🇸",
    headline: "Apple unveils Vision Pro 2 with neural interface capabilities at spring event",
    source: "The Verge",
    sourceUrl: "https://theverge.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: "🇺🇸",
    headline: "Microsoft reports 40% surge in Azure AI revenue, beats quarterly estimates",
    source: "CNBC",
    sourceUrl: "https://cnbc.com",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: "🇺🇸",
    headline: "Google DeepMind announces breakthrough in protein folding for drug discovery",
    source: "Wired",
    sourceUrl: "https://wired.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: "🇺🇸",
    headline: "Amazon expands drone delivery to 15 new cities, targets same-day coverage",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: "🇺🇸",
    headline: "Meta launches AR glasses with neural wristband, partners with Ray-Ban",
    source: "Wired",
    sourceUrl: "https://wired.com",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: "🇨🇳",
    headline: "ByteDance launches AI assistant to compete with ChatGPT in Asia",
    source: "South China Morning Post",
    sourceUrl: "https://scmp.com",
  },
]

const opinionsReports = [
  {
    id: "1",
    date: "Mar 13",
    flag: "🇺🇸",
    headline: "Goldman Sachs: AI productivity gains to add $7T to global GDP by 2030",
    source: "Goldman Sachs Research",
    sourceUrl: "https://goldmansachs.com",
  },
  {
    id: "2",
    date: "Mar 12",
    flag: "🇨🇭",
    headline: "World Economic Forum: Climate tech investment needs to triple by 2030",
    source: "WEF",
    sourceUrl: "https://weforum.org",
  },
  {
    id: "3",
    date: "Mar 11",
    flag: "🇺🇸",
    headline: "McKinsey: Remote work reshaping commercial real estate, 30% office reduction predicted",
    source: "McKinsey & Company",
    sourceUrl: "https://mckinsey.com",
  },
  {
    id: "4",
    date: "Mar 10",
    flag: "🇬🇧",
    headline: "The Economist: Central bank digital currencies to reshape global finance",
    source: "The Economist",
    sourceUrl: "https://economist.com",
  },
  {
    id: "5",
    date: "Mar 9",
    flag: "🇺🇸",
    headline: "Morgan Stanley: EV adoption to accelerate, 50% of new sales by 2030",
    source: "Morgan Stanley Research",
    sourceUrl: "https://morganstanley.com",
  },
  {
    id: "6",
    date: "Mar 8",
    flag: "🇸🇬",
    headline: "GIC report: Southeast Asia tech valuations bottoming, recovery expected",
    source: "GIC",
    sourceUrl: "https://gic.com.sg",
  },
]

export default function NewsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <p className="text-sm text-muted-foreground">
            Today, March 13, 2026
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <span role="img" aria-label="astronaut cat">🐱‍🚀</span> SEA Startups News
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div id="funding">
            <NewsSection
              title="Funding News 2026"
              emoji="⭐"
              items={fundingNews2026}
              defaultOpen={true}
              defaultOpenMobile={false}
            />
          </div>
          
          <div id="economic">
            <NewsSection
              title="Economic News"
              emoji="🌐"
              items={economicNews}
            />
          </div>
          
          <div id="regional">
            <NewsSection
              title="Regional News"
              emoji="🗞️"
              items={regionalNews}
            />
          </div>
          
          <div id="vc-pe-ipo">
            <NewsSection
              title="VC, PE & IPO News"
              emoji="📈"
              items={vcPeIpoNews}
            />
          </div>
          
          <div id="tech-giants">
            <NewsSection
              title="Tech Giant News"
              emoji="🦄"
              items={techGiantNews}
            />
          </div>
          
          <div id="opinions">
            <NewsSection
              title="Opinions & Reports"
              emoji="📄"
              items={opinionsReports}
            />
          </div>
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Data updated every 15 minutes. Last update: 2:45 PM UTC
          </p>
        </footer>
      </main>
    </div>
  )
}
