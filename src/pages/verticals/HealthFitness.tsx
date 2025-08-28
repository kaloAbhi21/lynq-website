import { Dumbbell, ArrowLeft, CheckCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function HealthFitness() {
  useEffect(() => {
    document.title = "Health & Fitness Solutions | LYNQ GROUP - A Satnaliwala Enterprises - Wellness Programs"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LYNQ GROUP - A Satnaliwala Enterprises offers comprehensive health and fitness solutions including wellness programs, fitness center management, health technology integration, and nutrition services for optimal well-being.')
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
                <Dumbbell className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Health & Fitness Solutions - Comprehensive Wellness
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                BeMeFit, the new-age fitness platform by LYNQ Group, is designed as a one-stop destination for holistic well-being. Each outlet integrates a Gym, Spa, MeStudio, and Organic Café, ensuring a balanced blend of fitness, relaxation, and nutrition. Guided by the philosophy of Be Me Fit (be self-fit), BeMeFit combines science-backed training, personalized programs, and world-class facilities to deliver effective health and lifestyle solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Health & Fitness Services & Wellness Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive wellness solutions that promote healthy lifestyles and optimal well-being through innovative fitness ecosystems, health technology integration, and personalized nutrition services.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Wellness Programs",
                  description: "Personalized programs designed to improve physical and mental health through structured guidance and lifestyle-focused approaches.",
                  features: ["Corporate Wellness", "Health & Fitness Assessments", "Lifestyle Coaching & Personal Training", "Preventive Care & Stress Management"]
                },
                {
                  title: "Fitness Centers",
                  description: "State-of-the-art facilities combining modern fitness equipment with spa and lifestyle services for a complete fitness experience.",
                  features: ["Gym Facilities with Latest Equipment", "Spa & Recovery Services", "MeStudio for Yoga, Dance & Group Classes", "Member-Centric Facility Management"]
                },
                {
                  title: "Health Tech",
                  description: "Integration of technology for data-driven fitness and health management, empowering individuals to monitor and optimize their progress.",
                  features: ["Digital Health Platforms", "Wearable Integration", "Health Monitoring", "Progress Tracking & Data Analytics"]
                },
                {
                  title: "Nutrition Services",
                  description: "Holistic nutrition and diet planning designed to complement fitness programs and support overall well-being.",
                  features: ["Organic Café with Healthy Meal Options", "Professional Nutrition Consulting", "Dietary Guidance", "Nutritional Education & Guidance"]
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
              <Heart className="h-12 w-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Health & Wellness?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join us in creating a healthier future with comprehensive wellness solutions that promote optimal well-being.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Start Your Wellness Journey
              </Button>
            </Card>
          </div>
        </section>
        
        <SEOInternalLinks currentPage="/verticals/health-fitness" />
      </main>
      <Footer />
    </div>
  )
}