import { TrendingUp, ArrowLeft, CheckCircle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function InfraVenture() {
  useEffect(() => {
    document.title = "InfraVenture | LYNQ GROUP - A Satnaliwala Enterprises - Smart Infrastructure Development"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LYNQ GROUP - A Satnaliwala Enterprises InfraVenture division specializes in smart infrastructure development, urban planning, sustainable development projects, and strategic infrastructure investments for smart cities.')
    }
  }, [])

  return (
    <div className="min-h-screen matte-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <Link to="/">
                <Button variant="hero-outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                InfraVenture Logistics
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                LYNQ InfraVenture is building modern warehousing and logistics infrastructure to meet the growing demand for supply chain services in Eastern India. Strategically located on the Dankuni–Sreerampur (Old Delhi Road) 4-lane highway, the upcoming 200,000 sq. ft. Logistic Park is designed to provide world-class warehousing solutions with unmatched connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our InfraVenture Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive logistics and infrastructure development solutions that create sustainable value for industries, communities, and regional trade networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Logistic Park (~200,000 sq. ft.)",
                  description: "A single-shade warehouse built to global standards, catering to multi-industry storage and distribution needs.",
                  features: ["Multi-Industry Warehousing Facilities", "Temperature-Control & Specialized Storage Options", "Advanced Inventory Management Systems", "Material Handling & Automation Support"]
                },
                {
                  title: "Excellent Highway & Transport Connectivity",
                  description: "Strategically located just 25 km from Kolkata, with access to domestic and international trade routes..",
                  features: ["Direct Connectivity to North East India, Nepal & Bangladesh", "Easy Access to Kolkata Ports for Import/Export", "Central Hub for Kolkata & Neighboring Districts", "High-Speed Road Network for Faster Distribution"]
                },
                {
                  title: "Regional & National Logistics Support",
                  description: "Enabling industries to scale with seamless regional and national connectivity through optimized logistics.",
                  features: ["Regional Distribution & Hub Operations", "National Logistics Integration", "Multi-Modal Transport Access", "Last-Mile Delivery Support"]
                },
                {
                  title: "Add-On Services & Community Development",
                  description: "Beyond warehousing, the logistic park integrates value-added services and creates employment opportunities.",
                  features: ["Food Outlets & Retail Shops", "Auxiliary Services for Workers & Businesses", "Over 1,000+ Jobs in Warehousing & Material Handling", "Local Economic Growth & Community Upliftment"]
                }
              ].map((service, index) => (
                <Card key={index} className="glossy hover-scale">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="glossy max-w-4xl mx-auto p-8 bg-gradient-primary text-white border-0 text-center">
              <Building2 className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to Build the Future?</h3>
              <p className="text-lg mb-6 opacity-90">
                Partner with us to create sustainable infrastructure solutions that drive community growth and economic development.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Start Your Project
              </Button>
            </Card>
          </div>
        </section>
        
        <SEOInternalLinks currentPage="/verticals/infraventure" />
      </main>
      <Footer />
    </div>
  )
}