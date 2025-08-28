import { Building, ArrowLeft, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Hospitality() {
  useEffect(() => {
    document.title = "Hospitality Services | LYNQ GROUP - A Satnaliwala Enterprises - Luxury Property Management"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LYNQ GROUP - A Satnaliwala Enterprises offers luxury hospitality services including property management, guest experience enhancement, event services, and customer service excellence that redefines industry standards.')
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
                <Building className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hospitality Excellence & Luxury Services
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Luxury hospitality experiences, property management, and customer service excellence that redefines industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Hospitality Services & Property Management</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Premium hospitality solutions that create memorable experiences and drive customer loyalty through exceptional service delivery, luxury property management, and comprehensive event services.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Luxury Properties",
                  description: "Premium property development, luxury resort management, and high-end accommodation services.",
                  features: ["Resort Development", "Luxury Accommodations", "Premium Facilities", "Concierge Services"]
                },
                {
                  title: "Guest Experience",
                  description: "Exceptional guest service programs, personalized experiences, and customer satisfaction optimization.",
                  features: ["Personalized Service", "Guest Relations", "Experience Design", "Customer Satisfaction"]
                },
                {
                  title: "Property Management",
                  description: "Comprehensive property management services, operations optimization, and facility maintenance.",
                  features: ["Operations Management", "Facility Maintenance", "Staff Training", "Quality Assurance"]
                },
                {
                  title: "Event Services",
                  description: "Professional event planning, venue management, and hospitality services for special occasions.",
                  features: ["Event Planning", "Venue Management", "Catering Services", "Entertainment Coordination"]
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
              <Star className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Hospitality Experience?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's create exceptional hospitality experiences that exceed expectations and build lasting customer relationships.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Start Your Journey
              </Button>
            </Card>
          </div>
        </section>
        
        <SEOInternalLinks currentPage="/verticals/hospitality" />
      </main>
      <Footer />
    </div>
  )
}