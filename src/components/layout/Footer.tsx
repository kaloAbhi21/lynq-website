import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'
  const { toast } = useToast()
  
  // Newsletter subscription state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      })
      return
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('subscribers')
        .insert([{ email: email.trim().toLowerCase() }])

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive"
          })
          setEmail('')
          return
        }
        throw supabaseError
      }

      // Send to Google Sheets via Apps Script
      try {
        const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            subscribed_at: new Date().toISOString()
          })
        })

        if (!response.ok) {
          console.warn('Failed to sync with Google Sheets, but Supabase save was successful')
        }
      } catch (sheetsError) {
        console.warn('Google Sheets sync failed:', sheetsError)
        // Don't fail the whole operation if Google Sheets fails
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive the latest updates and insights.",
        className: "border-green-500/50 bg-green-500/10"
      })

      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast({
        title: "Subscription Failed",
        description: "Unable to subscribe at the moment. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const footerSections = [
    {
      title: "Our Verticals",
      links: [
        { name: "Industrial Solutions", href: isHomePage ? "#verticals" : "/#verticals" },
        { name: "InfraVenture", href: "/verticals/infraventure" },
        { name: "Technology Services", href: isHomePage ? "#verticals" : "/#verticals" },
        { name: "Hospitality", href: "/verticals/hospitality" },
        { name: "Health & Fitness", href: "/verticals/health-fitness" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: isHomePage ? "#about" : "/#about" },
        { name: "Our Story", href: "/about-detail" },
        { name: "News & Updates", href: "/news" },
        { name: "Contact", href: isHomePage ? "#contact" : "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "News & Updates", href: "/news" },
        { name: "Industrial Solutions", href: "/verticals/industrial" },
        { name: "Hotels & Resorts", href: "/verticals/hotels" },
        { name: "Health Centers", href: "/verticals/health-fitness" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/lynqgroup/", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://x.com/lynqgroup", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://in.linkedin.com/company/thelynq.in", color: "hover:text-blue-700" },
    { icon: Instagram, href: "https://www.instagram.com/lynq_eofpl/", color: "hover:text-pink-600" }
  ]

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/lynq-logo-original.png" 
                alt="LYNQ Group - A Santliwala Enterprise" 
                className="h-16 w-auto mb-4 max-w-full object-contain dark:hidden"
              />
              <img 
                src="/images/lynq-logo-white.png" 
                alt="LYNQ Group - A Santliwala Enterprise" 
                className="h-16 w-auto mb-4 max-w-full object-contain hidden dark:block"
              />
              <p className="text-muted-foreground leading-relaxed">
                Pioneering innovation across Industrial, InfraVenture, Premium Hotels, and Health & Fitness sectors with cutting-edge solutions that drive growth and transform industries.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                Kolkata, West Bengal, India
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +91 98 7563 5062
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                info@lynqgroup.in
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`glossy hover:bg-primary/10 ${social.color} transition-all duration-300 hover-scale`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') || link.href.startsWith('/#') ? (
                      <button
                        onClick={() => {
                          if (link.href.startsWith('#')) {
                            const element = document.getElementById(link.href.substring(1));
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else if (link.href.startsWith('/#')) {
                            if (isHomePage) {
                              const element = document.getElementById(link.href.substring(2));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            } else {
                              navigate('/');
                              setTimeout(() => {
                                const element = document.getElementById(link.href.substring(2));
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, 100);
                            }
                          }
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest industry insights and company updates.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              />
              <Button 
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="dark glossy bg-primary hover:bg-primary/90 text-primary-foreground hover-scale disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] py-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} LYNQ GROUP - A Satnaliwala Enterprises. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
