import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ScraperCard, ScraperData } from "../components/ScraperCard";

const scrapers: ScraperData[] = [
  {
    title: "Invoice Categorizing Agent",
    slug: "beehive/invoice-categorizing-agent",
    description: "Crawl websites and extract text content to feed AI models, LLM applications, vector databases, or...",
    author: "BeeHive",
    icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/file-invoice-dollar.svg",
    users: "87K",
    rating: 4.4,
  },
  {
    title: "Smart home Agent",
    slug: "junglee/smart-home-agent",
    description: "Controls your heating and lighting just by voice, compatible with Siri and OK-Google",
    author: "Junglee",
    icon: "/bulb.svg",
    users: "9K",
    rating: 5.0,
  },
  {
    title: "Appointment Agent",
    slug: "beehive/appointment-agent",
    description: "Schedules Appointments and informs all participants...",
    author: "BeeHive",
    icon: "/appointment.svg",
    users: "36K",
    rating: 4.6,
  },
  {
    title: "TikTok Trend Finder",
    slug: "clockworks/tiktok-scraper",
    description: "Extract data from TikTok videos, hashtags, and users. Use URLs or search queries to scrape...",
    author: "Clockworks",
    icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    users: "94K",
    rating: 4.7,
  },
  {
    title: "Google SEO Optimizer",
    slug: "compass/seo-google",
    description: "This Agent improves your SEO rating by suggesting improvements in your descriptions and web layouts",
    author: "Compass",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg",
    users: "206K",
    rating: 4.8,
  },
  {
    title: "Instagram Description Helper",
    slug: "beehive/instagram-helper",
    description: "Scrape and download Instagram posts, profiles, places, hashtags, photos, and comments. Get...",
    author: "BeeHive",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    users: "149K",
    rating: 4.6,
  },

];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <section className="pb-20">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scrapers.map((scraper, index) => (
                <ScraperCard key={index} data={scraper} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:underline">
                Browse 7,000+ Actors &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
