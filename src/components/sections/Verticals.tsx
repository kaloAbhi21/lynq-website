import { Factory, Hotel, Building, Dumbbell, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function Verticals() {
  const navigate = useNavigate();
  const scrollRef = useScrollAnimation();
  
  const verticals = [
    {
      icon: Factory,
      title: "Industrial",
      description: "Driving sustainability through waste management, biomining, and organic fertilizer production, creating eco-friendly solutions that benefit both agriculture and the environment.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      features: ["Solid Waste Management & Biomining", "Organic Fertilizer Production (Bhu-Dhan)", "Plastic Waste & EPR Solutions", "Sustainable Agriculture Support"],
      path: "/verticals/industrial"
    },
    {
      icon: TrendingUp,
      title: "InfraVenture",
      description: "Modern warehousing and logistics infrastructure designed to support industries with efficient connectivity and scalable solutions.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      features: ["State-of-the-art Logistic Park (~200,000 sq. ft.)", "Multi-industry Warehousing Facilities", "Excellent Highway & Transport Connectivity", "Regional & National Logistics Support"],
      path: "/verticals/infraventure"
    },
    {
      icon: Hotel,
      title: "Premium Hotels",
      description: "Luxury boutique hotels offering world-class hospitality and memorable experiences in the cultural capital of India.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      features: ["LYNQ AERO – 77 boutique rooms", "LYNQ CICO – 50 elegantly designed rooms", "Quantum Restaurant & Bar, Bronz Banquets & Spa", "Quench – Rooftop Lounge & Bar & Event Facilities"],
      path: "/verticals/hotels"
    },
    {
      icon: Building,
      title: "Hospitality",
      description: "Luxury hospitality experiences, property management, and customer service excellence that redefines industry standards.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      features: ["Wellness & Spa Services for Holistic Relaxation", "State-of-the-Art Conference & Event Facilities", "Banquet Solutions for Social & Corporate Gatherings", "Personalized Guest Care & Service Excellence"],
      path: "/verticals/hospitality"
    },
    {
      icon: Dumbbell,
      title: "Health & Fitness",
      description: "BeMeFit – LYNQ Group’s premium fitness and wellness brand – delivers comprehensive health solutions, advanced training facilities, and lifestyle-focused programs for holistic well-being.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      features: ["BeMeFit Premium Fitness Centers", "Wellness Programs & Lifestyle Coaching", "Expert-Led Training & Health Monitoring", "Nutrition & Holistic Wellness Services"],
      path: "/verticals/health-fitness"
    }
  ]

  return (
    <section id="verticals" className="section-enhanced bg-muted/30" ref={scrollRef} aria-labelledby="verticals-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-20 scroll-fade-in">
          <h2 id="verticals-heading" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our <span className="gradient-text">Business Verticals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how LYNQ Group drives innovation across diverse industries, 
            delivering specialized solutions that transform businesses and communities.
          </p>
        </header>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 scroll-fade-in">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon
            return (
              <Card 
                key={index} 
                className={`glossy hover-lift cursor-pointer group transition-all duration-300 hover:shadow-elegant ${vertical.borderColor} border-2 hover:border-primary/30`}
                onClick={() => {
                  navigate(vertical.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${vertical.title} - ${vertical.description}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(vertical.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${vertical.bgColor} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-10 w-10 ${vertical.color}`} aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">
                    <h3>{vertical.title}</h3>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {vertical.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {vertical.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className={`w-2 h-2 rounded-full ${vertical.bgColor.replace('/10', '')} mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className={`w-full ${vertical.borderColor} hover:${vertical.bgColor} hover:${vertical.color} transition-all duration-300 py-3`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(vertical.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <section className="text-center scroll-fade-in">
          <Card className="glossy max-w-4xl mx-auto p-12 bg-gradient-primary text-white border-0 hover-lift">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Partner with THE LYNQ GROUP - A Satnaliwala Enterprises and unlock the potential of innovative, 
              multi-sector solutions tailored to your unique needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-12 py-4 font-semibold hover-scale text-lg"
              aria-label="Contact us to start your business transformation journey"
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Journey
            </Button>
          </Card>
        </section>
      </div>
    </section>
  )
}