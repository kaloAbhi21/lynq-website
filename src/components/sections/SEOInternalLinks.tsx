import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InternalLinksProps {
  currentPage: string
}

export function SEOInternalLinks({ currentPage }: InternalLinksProps) {
  const pages = [
    { 
      title: "Industrial Solutions", 
      path: "/verticals/industrial", 
      description: "Manufacturing excellence and automation systems" 
    },
    { 
      title: "InfraVenture", 
      path: "/verticals/infraventure", 
      description: "Smart infrastructure development and urban planning" 
    },
    { 
      title: "Premium Hotels", 
      path: "/verticals/hotels", 
      description: "LYNQ CICO & LYNQ AERO luxury boutique hotels in Kolkata" 
    },
    { 
      title: "Hospitality Services", 
      path: "/verticals/hospitality", 
      description: "Luxury property management and guest experience" 
    },
    { 
      title: "Health & Fitness", 
      path: "/verticals/health-fitness", 
      description: "Comprehensive wellness programs and fitness solutions" 
    }
  ]

  const relatedPages = pages.filter(page => page.path !== currentPage).slice(0, 3)

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Explore Our Other Business Verticals</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how LYNQ Santiwala Enterprises delivers innovative solutions across multiple industries
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPages.map((page, index) => (
            <Link key={index} to={page.path}>
              <Card className="glossy hover-scale transition-all duration-300 hover:shadow-elegant h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{page.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{page.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}