import { SearchBar } from "@/components/search-bar"
import { FeatureCards } from "@/components/feature-cards"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="text-magenta-500 glow-text">Eclipse</span>
          </h1>
          <p className="text-xl text-white mb-8">Search the best files available in the community uploaded by users!</p>

          <SearchBar />
        </div>

        {/* Feature Cards */}
        <FeatureCards />
      </main>
    </div>
  )
}
