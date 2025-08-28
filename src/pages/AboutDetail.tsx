import { useEffect } from "react"
import { ArrowLeft, Users, Target, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SEOInternalLinks } from "@/components/sections/SEOInternalLinks"
import { useNavigate } from "react-router-dom"

export default function AboutDetail() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "About LYNQ - Our Story, Team & Vision | LYNQ GROUP - A Satnaliwala Enterprises"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about LYNQ GROUP - A Satnaliwala Enterprises - our 25+ year journey, leadership team, collaborators, and vision for transforming industries through innovation.')
    }
  }, [])

  const teamMembers = [
    {
      name: "Sudhir Satnaliwala",
      position: "Chairman & Managing Director",
      expertise: "Strategic Leadership, Multi-Sector Operations",
      experience: "30+ years"
    },
    {
      name: "Akshay Satnaliwala",
      position: "Director",
      expertise: "Industrial Innovation, Sustainable Growth",
      experience: "10+ years"
    },
    {
      name: "Suresh Kumar Lohia",
      position: "Operations Manager",
      expertise: "Process Optimization, Digital Transformation",
      experience: "10+ years"
    },
    {
      name: "Ajoy Lodha",
      position: "Chief Financial Officer",
      expertise: "Financial Strategy, Risk Management",
      experience: "7+ years"
    }

  ]

  const collaborators = [
    {
      name: "Eastern Organic Fertilizer Pvt. Ltd.",
      relationship: "Strategic Partner",
      focus: "Bio-organic soil enrichment solutions"
    },
    {
      name: "InfraVenture Logistics",
      relationship: "Logistics Partner",
      focus: "Warehousing and distribution infrastructure"
    },
    {
      name: "LYNQ Hotels",
      relationship: "Hospitality Partner", 
      focus: "Luxury hospitality and modern services"
    },
    {
      name: "BeMeFit",
      relationship: "Health & Fitness Partner",
      focus: "Integrated fitness and wellness solutions"
    }
  ]

  return (
    <div className="min-h-screen matte-bg">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-enhanced">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="mb-8 group"
                aria-label="Go back to home page"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Our <span className="gradient-text">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the journey, vision, and people behind LYNQ GROUP – A Satnaliwala Enterprise, driving transformative impact across industries with innovation, integrity, and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Extended About Content */}
        <section id="extended-story" className="section-enhanced">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-8 gradient-text">Our Journey</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Founded in 1995, LYNQ GROUP - A Satnaliwala Enterprises began as a vision to create 
                    meaningful impact across traditional industries through innovative approaches. 
                    What started as a single manufacturing unit in Kolkata has evolved into a 
                    diversified enterprise with operations spanning five major sectors.
                  </p>
                  <p>
                    Our leader, Akshay Satnaliwala, serves as the Director of THE LYNQ GROUP, with a proven background in waste management, biomining, and organic fertilizer solutions. His leadership has been pivotal in aligning the enterprise with sustainability and innovation across its verticals.
                  </p>
                  <p>
                    Over the years, we have navigated economic shifts, embraced digital transformation, and invested deeply in sustainability. Today, LYNQ stands as a testament to adaptive leadership, resilience, and strategic diversification.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-8 gradient-text">Our Vision</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    We envision a future where businesses don't just pursue profit, but actively 
                    contribute to societal progress. Our integrated approach across industrial 
                    manufacturing, infrastructure, technology, hospitality, and health sectors 
                    creates a unique ecosystem of innovation.
                  </p>
                  <p>
                    By 2030, we aim to be recognized as India's leading diversified enterprise, 
                    known for our commitment to sustainability, technological advancement, and 
                    community development. We're not just building businesses; we're crafting 
                    solutions for tomorrow's challenges.
                  </p>
                  <p>
                    Our vision extends beyond corporate success to encompass environmental 
                    stewardship, social responsibility, and economic empowerment of the 
                    communities we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-16">
                Leadership <span className="gradient-text">Team</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="glossy hover-lift text-center">
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-primary font-semibold">{member.position}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{member.expertise}</p>
                      <div className="flex items-center justify-center text-xs text-primary">
                        <Star className="h-3 w-3 mr-1" />
                        {member.experience}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Collaborators & Partners */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-16">
                Our <span className="gradient-text">Collaborators</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {collaborators.map((collaborator, index) => (
                  <Card key={index} className="glossy hover-lift">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                          <p className="text-accent font-semibold text-sm">{collaborator.relationship}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{collaborator.focus}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="glossy bg-gradient-primary text-white border-0 p-12 hover-lift">
                <h3 className="text-3xl font-bold mb-6">Join Our Journey</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Partner with us to create innovative solutions that drive growth, 
                  sustainability, and positive impact across industries.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold hover-scale"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Get in Touch
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <SEOInternalLinks currentPage="/about-detail" />
      </main>
      <Footer />
    </div>
  )
}
