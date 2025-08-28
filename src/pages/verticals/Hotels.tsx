import { Hotel, ArrowLeft, CheckCircle, Bed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Hotels() {
  useEffect(() => {
    document.title = "Premium Hotels | LYNQ AERO & LYNQ CICO - Luxury Boutique Hotels Kolkata"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience luxury at LYNQ AERO economic luxury hotel in Salt Lake and LYNQ CICO premium boutique hotel in Alipore, Kolkata. World-class hospitality and memorable stays in the cultural capital of India.')
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
                <Hotel className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Premium Hotels in Kolkata - LYNQ AERO & LYNQ CICO
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Experience luxury and comfort at our premium boutique hotels in the heart of Kolkata, offering world-class hospitality and memorable stays.
              </p>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Premium Hotels in Kolkata</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the finest hospitality at our luxury boutique hotels LYNQ AERO and LYNQ CICO, designed to provide unforgettable stays in the cultural capital of India with world-class amenities and service.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {[
                
                {
                  title: "LYNQ AERO", 
                  subtitle: "Economic Luxury Hotel",
                  description: "Located in the bustling Salt Lake area, offering economic luxury at its best. Modern amenities and comfortable accommodations for both business and leisure travelers.",
                  features: ["Modern Amenities", "Strategic Location", "Business Center", "Comfortable Rooms", "Airport Proximity", "Value for Money"],
                  location: "Salt Lake, Sector V, Bidhannagar"
                },
                {
                  title: "LYNQ CICO",
                  subtitle: "Luxury Boutique Hotel",
                  description: "A premium 3-star luxury boutique hotel located in the heart of Kolkata. With world-class interiors, excellent service, and harmonic atmosphere, ensuring memorable experiences in the cultural capital of India.",
                  features: ["World-Class Interiors", "Excellent Service", "Premium Location", "Business Facilities", "Cultural Experience", "Fine Dining"],
                  location: "Heart of Kolkata, Alipore"
                }
              ].map((hotel, index) => (
                <Card key={index} className="glossy hover-scale">
                  <CardHeader>
                    <CardTitle className="text-2xl">{hotel.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mb-2">{hotel.subtitle}</CardDescription>
                    <CardDescription className="text-base mb-4">{hotel.description}</CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>{hotel.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Hotel Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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
              <Bed className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Premium Hospitality?</h3>
              <p className="text-lg mb-6 opacity-90">
                Book your stay at our luxury boutique hotels and create unforgettable memories in the cultural capital of India.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                onClick={() => {
                  window.location.href = 'https://lynqhotels.com/';
                }}
              >
                Book Your Stay
              </Button>
            </Card>
          </div>
        </section>
        
        <SEOInternalLinks currentPage="/verticals/hotels" />
      </main>
      <Footer />
    </div>
  )
}