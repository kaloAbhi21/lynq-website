import { Link } from "react-router-dom"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function News() {
  const scrollRef = useScrollAnimation()
  const newsItems = [
    {
      id: "bhu-dhan-bio-organic-soil-enricher",
      title: "Bhu‑Dhan: EOFPL's Bio‑Organic Soil Enricher",
      excerpt: "Revolutionary bio‑organic microbial soil enricher launched by Eastern Organic Fertilizer Pvt. Ltd. featuring nitrogen‑fixing bacteria and phosphate‑solubilising microorganisms.",
      date: "2006-03-20",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    // {
    //   id: "industrial-automation-partnership",
    //   title: "LYNQ Announces Strategic Partnership in Industrial Automation",
    //   excerpt: "New collaboration aims to revolutionize manufacturing processes with AI-driven automation solutions across multiple sectors.",
    //   date: "2024-03-15",
    //   category: "Industrial",
    //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    //   featured: false
    // },
    // {
    //   id: "cloud-infrastructure-launch",
    //   title: "Technology Division Launches Cloud Infrastructure Services",
    //   excerpt: "Comprehensive cloud solutions now available to help businesses scale and optimize their digital infrastructure.",
    //   date: "2024-03-10",
    //   category: "Technology",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    //   featured: false
    // },
    // {
    //   id: "luxury-resort-project",
    //   title: "New Luxury Resort Project Breaks Ground",
    //   excerpt: "LYNQ's hospitality division begins construction on a sustainable luxury resort featuring innovative eco-friendly technologies.",
    //   date: "2024-03-05",
    //   category: "Hospitality",
    //   image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    //   featured: false
    // }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Agriculture": "bg-green-500/10 text-green-500 border-green-500/30",
      "Industrial": "bg-blue-500/10 text-blue-500 border-blue-500/30",
      "Technology": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Hospitality": "bg-orange-500/10 text-orange-500 border-orange-500/30",
      "Health & Fitness": "bg-red-500/10 text-red-500 border-red-500/30",
      "InfraVenture": "bg-green-500/10 text-green-500 border-green-500/30"
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-500 border-gray-500/30"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="news" className="section-enhanced bg-muted/30" ref={scrollRef} aria-labelledby="news-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-fade-in">
          <h2 id="news-heading" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Latest <span className="gradient-text">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest developments, partnerships, and innovations 
            across all our business verticals.
          </p>
        </div>

        {/* Featured Article */}
        <div className="scroll-fade-in">
          {newsItems.filter(item => item.featured).map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`} 
              className="block mb-16"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Card className="glossy overflow-hidden group hover-lift cursor-pointer hover:shadow-elegant transition-all duration-300 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className={`${getCategoryColor(item.category)} border text-base px-4 py-2`}>
                      Featured • {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-muted-foreground mb-6">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span className="text-base">{formatDate(item.date)}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {item.excerpt}
                  </p>
                  <Button size="lg" variant="outline" className="self-start group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 px-6 py-3">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
            </Link>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-fade-in">
          {newsItems.filter(item => !item.featured).map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Card className="glossy overflow-hidden group hover-lift cursor-pointer hover:shadow-elegant transition-all duration-300 border hover:border-primary/30 h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(item.category)} border`}>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{formatDate(item.date)}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-snug">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base">
                  {item.excerpt}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* View All News Button */}
        <div className="dark text-center scroll-fade-in">
          <Link to="/news" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button size="lg" className="glossy bg-primary hover:bg-primary/90 text-primary-foreground hover-scale hover:shadow-glow px-12 py-4 text-lg">
              View All News & Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}