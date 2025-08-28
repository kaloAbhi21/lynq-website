import { useParams, Link, Navigate } from "react-router-dom"
import { Calendar, ArrowLeft, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function NewsDetail() {
  const { id } = useParams()
  const scrollRef = useScrollAnimation()

  const newsItems = {
    "bhu-dhan-bio-organic-soil-enricher": {
      title: "Bhu‑Dhan: EOFPL's Bio‑Organic Soil Enricher",
      date: "2006-03-20",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Revolutionary Bio‑Organic Soil Enhancement</h2>
          <p>Eastern Organic Fertilizer Pvt. Ltd. is proud to introduce <strong>Bhu‑Dhan</strong>, a groundbreaking bio‑organic microbial soil enricher that represents a new era in sustainable agriculture. This innovative solution combines cutting-edge microbiology with organic farming principles to deliver unprecedented soil health benefits.</p>
          
          <h3>Advanced Microbial Composition</h3>
          <p>Bhu‑Dhan's unique formulation includes:</p>
          <ul>
            <li><strong>Free‑living nitrogen‑fixing bacteria:</strong> Naturally convert atmospheric nitrogen into plant-available forms</li>
            <li><strong>Phosphate‑solubilising microorganisms:</strong> Unlock bound phosphorus in soil, making it accessible to plants</li>
            <li><strong>Matured organic matter:</strong> Provides sustained nutrition and improves soil structure</li>
            <li><strong>Biological chelated nutrients:</strong> Enhanced nutrient absorption and reduced leaching</li>
          </ul>
          
          <h3>Key Benefits for Sustainable Agriculture</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="p-6 bg-muted/50 rounded-lg">
              <h4 class="font-semibold text-lg mb-3">🌱 Slow Release of Nutrients</h4>
              <p>Provides consistent nutrition throughout the growing season, reducing fertilizer application frequency and preventing nutrient burn.</p>
            </div>
            <div class="p-6 bg-muted/50 rounded-lg">
              <h4 class="font-semibold text-lg mb-3">🦠 Rejuvenates Soil Biology</h4>
              <p>Restores beneficial microbial communities essential for healthy soil ecosystem and plant growth.</p>
            </div>
            <div class="p-6 bg-muted/50 rounded-lg">
              <h4 class="font-semibold text-lg mb-3">💧 Enhanced Water Retention</h4>
              <p>Improves soil porosity and water-holding capacity, reducing irrigation requirements and drought stress.</p>
            </div>
            <div class="p-6 bg-muted/50 rounded-lg">
              <h4 class="font-semibold text-lg mb-3">⚡ Optimizes Chemical Fertilizers</h4>
              <p>Enhances the performance and efficiency of conventional fertilizers while reducing overall chemical input needs.</p>
            </div>
          </div>
          
          <h3>The Science Behind Bhu‑Dhan</h3>
          <p>The name <strong>Bhu‑Dhan</strong> represents our commitment to soil wealth and agricultural sustainability:</p>
          <div class="bg-primary/5 p-6 rounded-lg my-6">
            <ul class="space-y-2">
              <li><strong>B</strong> = Biodegradable - Environmentally safe decomposition</li>
              <li><strong>H</strong> = Healthy - Promotes soil and plant health</li>
              <li><strong>U</strong> = Upgradable - Continuously improves soil quality</li>
              <li><strong>D</strong> = Decompose - Natural breakdown of organic matter</li>
              <li><strong>H</strong> = Hygiene - Clean, safe agricultural practices</li>
              <li><strong>A</strong> = Agriculture - Supporting sustainable farming</li>
              <li><strong>N</strong> = Nutrient - Rich source of essential elements</li>
            </ul>
          </div>
          
          <h3>Application and Results</h3>
          <p>Farmers using Bhu‑Dhan have reported significant improvements in crop yield, soil structure, and reduced dependency on chemical inputs. The product is suitable for all major crops including cereals, pulses, vegetables, and commercial crops.</p>
          
          <p>This innovative soil enricher represents Eastern Organic Fertilizer Pvt. Ltd.'s dedication to providing farmers with scientifically advanced, environmentally responsible solutions that support both productivity and sustainability in modern agriculture.</p>
        </div>
      `
    },
    // "industrial-automation-partnership": {
    //   title: "LYNQ Announces Strategic Partnership in Industrial Automation",
    //   date: "2024-03-15",
    //   category: "Industrial",
    //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    //   content: `
    //     <div class="prose prose-lg max-w-none">
    //       <h2>Revolutionary Partnership in Manufacturing</h2>
    //       <p>LYNQ Group is excited to announce a groundbreaking strategic partnership that will revolutionize manufacturing processes across multiple industrial sectors through AI-driven automation solutions.</p>
          
    //       <h3>Partnership Overview</h3>
    //       <p>This collaboration brings together cutting-edge technology and decades of industrial expertise to create automated solutions that enhance efficiency, reduce costs, and improve safety standards in manufacturing environments.</p>
          
    //       <h3>Key Focus Areas</h3>
    //       <ul>
    //         <li>Robotic process automation in assembly lines</li>
    //         <li>Predictive maintenance systems</li>
    //         <li>Quality control automation</li>
    //         <li>Supply chain optimization</li>
    //         <li>Smart factory integration</li>
    //       </ul>
          
    //       <p>The partnership is expected to deliver significant value to manufacturers looking to modernize their operations and stay competitive in the global market.</p>
    //     </div>
    //   `
    // },
    // "cloud-infrastructure-launch": {
    //   title: "Technology Division Launches Cloud Infrastructure Services",
    //   date: "2024-03-10",
    //   category: "Technology",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    //   content: `
    //     <div class="prose prose-lg max-w-none">
    //       <h2>Comprehensive Cloud Solutions</h2>
    //       <p>Our Technology Division has officially launched a comprehensive suite of cloud infrastructure services designed to help businesses scale and optimize their digital infrastructure.</p>
          
    //       <h3>Service Offerings</h3>
    //       <ul>
    //         <li>Cloud migration and setup</li>
    //         <li>Infrastructure monitoring and management</li>
    //         <li>Data backup and disaster recovery</li>
    //         <li>Security and compliance solutions</li>
    //         <li>Performance optimization</li>
    //       </ul>
          
    //       <p>These services are designed to provide businesses with the flexibility and scalability they need to grow in today's digital economy.</p>
    //     </div>
    //   `
    // },
    // "luxury-resort-project": {
    //   title: "New Luxury Resort Project Breaks Ground",
    //   date: "2024-03-05",
    //   category: "Hospitality",
    //   image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80",
    //   content: `
    //     <div class="prose prose-lg max-w-none">
    //       <h2>Sustainable Luxury Hospitality</h2>
    //       <p>LYNQ's hospitality division has begun construction on an innovative luxury resort that combines high-end amenities with cutting-edge eco-friendly technologies.</p>
          
    //       <h3>Sustainability Features</h3>
    //       <ul>
    //         <li>Solar-powered energy systems</li>
    //         <li>Rainwater harvesting</li>
    //         <li>Waste recycling programs</li>
    //         <li>Locally sourced materials</li>
    //         <li>Green building certifications</li>
    //       </ul>
          
    //       <p>This project represents our commitment to sustainable tourism and environmental responsibility while delivering exceptional guest experiences.</p>
    //     </div>
    //   `
    // },
    // "wellness-programs-expansion": {
    //   title: "Health & Fitness Centers Expand Wellness Programs",
    //   date: "2024-02-28",
    //   category: "Health & Fitness",
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    //   content: `
    //     <div class="prose prose-lg max-w-none">
    //       <h2>Holistic Wellness Approach</h2>
    //       <p>Our Health & Fitness division has expanded its offerings with comprehensive wellness programs that combine physical fitness, mental health, and nutritional guidance.</p>
          
    //       <h3>Program Components</h3>
    //       <ul>
    //         <li>Personalized fitness training</li>
    //         <li>Mental health counseling</li>
    //         <li>Nutritional planning</li>
    //         <li>Stress management workshops</li>
    //         <li>Wellness coaching</li>
    //       </ul>
          
    //       <p>These programs are designed to support overall well-being and help individuals achieve their health and fitness goals through a comprehensive approach.</p>
    //     </div>
    //   `
    // }
  }

  const article = newsItems[id as keyof typeof newsItems]

  if (!article) {
    return <Navigate to="/news" replace />
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Agriculture": "bg-green-500/10 text-green-500 border-green-500/30",
      "Industrial": "bg-blue-500/10 text-blue-500 border-blue-500/30",
      "Technology": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Hospitality": "bg-orange-500/10 text-orange-500 border-orange-500/30",
      "Health & Fitness": "bg-red-500/10 text-red-500 border-red-500/30"
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
    <div className="min-h-screen matte-bg">
      <Header />
      <main className="pt-16">
        <article className="section-enhanced" ref={scrollRef}>
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8 scroll-fade-in">
              <Link to="/news">
                <Button variant="outline" size="lg" className="hover-scale">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to News
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="lg" className="hover-scale">
                  <Home className="mr-2 h-5 w-5" />
                  Home
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12 scroll-fade-in">
              <div className="mb-6">
                <Badge className={`${getCategoryColor(article.category)} border text-base px-4 py-2`}>
                  {article.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground mb-8">
                <Calendar className="h-5 w-5 mr-3" />
                <span className="text-lg">{formatDate(article.date)}</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 scroll-fade-in">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant"
              />
            </div>

            {/* Article Content */}
            <div 
              className="scroll-fade-in"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Download PDF for Bhu-Dhan article */}
            {id === "bhu-dhan-bio-organic-soil-enricher" && (
              <div className="mt-12 p-6 bg-muted/30 rounded-lg scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                <Button className="glossy bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
                  <Download className="mr-2 h-5 w-5" />
                  Download Product Brochure (PDF)
                </Button>
              </div>
            )}

            {/* Back Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-border/50 scroll-fade-in">
              <Link to="/news">
                <Button variant="outline" size="lg" className="hover-scale">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to News List
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" className="glossy bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
                  <Home className="mr-2 h-5 w-5" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}