import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useLocation, useNavigate, Link } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "Verticals", href: isHomePage ? "#verticals" : "/#verticals" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "News", href: isHomePage ? "#news" : "/#news" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Same page scroll
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#')) {
      // Cross-page scroll - navigate to home then scroll
      if (isHomePage) {
        const element = document.getElementById(href.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        // Use setTimeout to ensure DOM is ready after navigation
        setTimeout(() => {
          const element = document.getElementById(href.substring(2));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Regular navigation using React Router
      navigate(href);
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glossy border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="LYNQ Satnaliwala Enterprises Home">
              <img 
                src="/images/lynq-logo-original.png" 
                alt="LYNQ Group - A Satnaliwala Enterprise" 
                className="h-10 w-auto md:h-12 max-w-full object-contain dark:hidden transition-all duration-300"
              />
              <img 
                src="/images/lynq-logo-white.png" 
                alt="LYNQ Group - A Satnaliwala Enterprise" 
                className="h-10 w-auto md:h-12 max-w-full object-contain hidden dark:block transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-md hover:bg-muted text-left w-full"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
