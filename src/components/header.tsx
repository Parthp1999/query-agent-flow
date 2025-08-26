import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain, Menu, X, Github, ExternalLink } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card border-b backdrop-blur-xl" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Agentic AI - <span className="text-white"> Documentation </span></h1>
              <p className="text-xs text-muted-foreground">Database Agent</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("architecture")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("api")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              API
            </button>
            <button
              onClick={() => scrollToSection("getting-started")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Get Started
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="glass-button"
            >
              <a
                href="https://github.com/o1sumit/ai-agent-api"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="glass-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t glass-card mt-4 py-4 space-y-4 animate-slide-up">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("architecture")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("api")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              API
            </button>
            <button
              onClick={() => scrollToSection("getting-started")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Get Started
            </button>
            <div className="flex space-x-2 px-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="flex-1 glass-button">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}