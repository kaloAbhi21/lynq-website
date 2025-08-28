import { Target, Users, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useNavigate } from "react-router-dom"

export function About() {
  const scrollRef = useScrollAnimation()
  const navigate = useNavigate()
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that drive industry transformation and create sustainable value."
    },
    {
      icon: Users,
      title: "Excellence",
      description: "Delivering exceptional quality and exceeding expectations in every project and partnership."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Building trust through transparent practices, ethical business conduct, and reliable service delivery."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating positive change that benefits communities, industries, and the global ecosystem."
    }
  ]

  return (
    <section id="about" className="section-enhanced" ref={scrollRef} aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-slide-left">
            <h2 id="about-heading" className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              About <span className="gradient-text">LYNQ</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                For over three decades, LYNQ Group – A Satnaliwala Enterprise has been a trusted name in Eastern India, driven by the ethos “Work Hard, Work Smart.” Our journey began with a vision to combine innovation, sustainability, and excellence across diverse sectors, transforming businesses and enriching communities.
              </p>
              
              <p>
                <p>Today, we stand as a diversified enterprise with strong presence in:</p>

<ul>
  <li><b>Industrial</b> – driving sustainability through waste management.</li>
  <li><b>InfraVenture</b> – advancing warehousing and logistics infrastructure.</li>
  <li><b>Hospitality</b> – redefining stays with boutique hotels in Kolkata.</li>
  <li><b>Health & Fitness</b> – promoting wellness through our ecosystem.</li>
</ul>



              </p>
              
              <p>
                Our unwavering commitment to sustainability, innovation, and customer excellence has positioned us as one of the most prominent and progressive business groups in Kolkata, shaping industries while building a greener and smarter future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/5 border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">30M+</div>
                <div className="text-sm text-muted-foreground">Tons waste processed</div>
              </div>
            </div>

            {/* See More Button */}
            <div className="mt-12">
              <Button 
                size="lg" 
                variant="outline"
                className="hover-scale group"
                onClick={() => navigate('/about-detail')}
                aria-label="Learn more about LYNQ's story and team"
              >
                See More About Our Story
                <Target className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-slide-right">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="glossy p-6 hover-lift cursor-pointer group transition-all duration-300 hover:shadow-elegant">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 scroll-fade-in">
          <Card className="glossy bg-gradient-primary text-white border-0 p-16 text-center hover-lift">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h3>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              To empower businesses and communities through innovative, sustainable solutions 
              that drive growth, create value, and build a better future for all stakeholders.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
