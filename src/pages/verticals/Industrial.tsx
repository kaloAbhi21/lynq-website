import { Factory, ArrowLeft, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Industrial() {
  useEffect(() => {
    document.title = "Industrial Solutions | LYNQ GROUP - A Satnaliwala Enterprises - Manufacturing & Automation"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LYNQ GROUP - A Satnaliwala Enterprises offers advanced industrial solutions including manufacturing excellence, automation systems, quality control, and supply chain optimization. Transform your industrial operations.')
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
                <Factory className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Industrial Solutions & Sustainability Excellence
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Founded in 2000, <b>Eastern Organic Fertilizer Pvt. Ltd. (EOFPL)</b> is one of the leading and largest companies in Eastern India in solid waste management and organic manure production.The company was established with the belief that the quality of soil determines the quality of crops, and ultimately, our lives.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Industrial & Environmental Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                EOFPL drives innovation in waste management, biomining, and organic fertilizer production, delivering sustainable solutions that benefit both agriculture and the environment.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Solid Waste Management & Biomining",
                  description: "EOFPL processes municipal solid waste, supplied by The Kolkata Municipal Corporation, and transforms it into valuable resources, reducing landfill dependency.",
                  features: ["City Solid Waste Processing", "Biomining & Waste Segregation", "Composting & Recycling Initiatives", "Environmental Compliance"]
                },
                {
                  title: "Organic Fertilizer Production (Bhu-Dhan)",
                  description: "Bhu-Dhan, EOFPL’s flagship bio-organic microbial soil enricher, is manufactured by decomposition of city solid waste as per Town Compost specifications under FCO norms.",
                  features: ["100% Organic & Sustainable", "Slow Nutrient Release for Crops", "Improves Soil Porosity & pH Balance", "Reduces Dependence on Chemical Fertilizers"]
                },
                {
                  title: "Plastic Waste & EPR Solutions",
                  description: "EOFPL provides integrated solutions for responsible plastic waste management under Extended Producer Responsibility (EPR) frameworks.",
                  features: ["Plastic Waste Collection & Processing", "EPR Compliance & Advisory", "Recycling & Circular Economy Models", "Go Green: Reduce, Reuse, Recycle"]
                },
                {
                  title: "Sustainable Agriculture Support",
                  description: "EOFPL supports farmers through eco-friendly soil enrichment solutions that enhance productivity while preserving natural resources.",
                  features: ["Bio-organic Soil Enrichment", "Water Retention & Soil Structure Improvement", "Reduced Irrigation Needs", "Higher Yield with Lower Chemical Use"]
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
              <TrendingUp className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to Modernize Your Industrial Operations?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how our industrial solutions can transform your manufacturing processes and drive growth.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Get Started Today
              </Button>
            </Card>
          </div>
        </section>
        
        <SEOInternalLinks currentPage="/verticals/industrial" />
      </main>
      <Footer />
    </div>
  )
}