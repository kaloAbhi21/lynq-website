import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero-background.jpg)` }}
        role="img"
        aria-label="LYNQ GROUP - A Satnaliwala Enterprises modern office building showcasing our multi-sector business solutions"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* Badge — force dark styling regardless of global theme */}
          <div className="dark inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Innovative Multi-Sector Solutions
          </div>

          {/* Main heading — force dark styling for gradient/text */}
          <div className="dark">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in-up text-white leading-tight"
            >
              <span className="gradient-text">LYNQ</span>{" "}
              <span className="text-white">GROUP</span>
            </h1>
          </div>

          {/* Company name */}
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up font-medium">
            A Satnaliwala Enterprises
          </p>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-16 max-w-4xl mx-auto animate-fade-in-up leading-relaxed">
            Pioneering innovation across Industrial, InfraVenture, Premium Hotels, and Health & Fitness sectors with cutting-edge solutions that drive growth and transform industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            {/* Explore Verticals — force dark styling regardless of global theme */}
            <div className="dark">
              <Button
                size="lg"
                className="glossy bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold hover-scale hover:shadow-glow"
                onClick={() => {
                  const verticalsSection = document.getElementById("verticals")
                  if (verticalsSection) {
                    verticalsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                aria-label="Explore our business verticals including Industrial, InfraVenture, Hotels, Hospitality and Health Fitness"
              >
                Explore Our Verticals
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>

            {/* Watch Our Story — theme should toggle normally */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glossy px-8 py-4 text-lg font-semibold hover-scale
                bg-white text-black dark:bg-black dark:text-white 
                border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              <a
                href="https://youtu.be/vazg4nV0oTk?si=oco2j8hE_4dezWOk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch our company story and achievements video"
              >
                <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                Watch Our Story
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="dark grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
            {[
              { number: "30M+", label: "Tons waste processed" },
              { number: "200,000+", label: "Sq. ft. logistics space" },
              { number: "2", label: "Boutique Hotels" },
              { number: "1000+", label: "Lives impacted" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="dark absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
