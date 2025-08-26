import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Brain, Github, ExternalLink, Mail, MessageCircle, Book, Zap } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { title: "Features", href: "#features" },
    { title: "Architecture", href: "#architecture" },
    { title: "How It Works", href: "#how-it-works" },
    { title: "API Reference", href: "#api" },
    { title: "Security", href: "#security" },
    { title: "Getting Started", href: "#getting-started" }
  ]

  const resources = [
    { title: "Documentation", href: "/docs", icon: Book },
    { title: "API Reference", href: "/api-docs", icon: ExternalLink },
    { title: "Playground", href: "/playground", icon: Zap },
    { title: "Examples", href: "/examples", icon: Github }
  ]

  const community = [
    { title: "GitHub", href: "https://github.com/your-org/agentic-ai", icon: Github },
    { title: "Discord", href: "https://discord.gg/your-server", icon: MessageCircle },
    { title: "Support", href: "mailto:support@example.com", icon: Mail },
    { title: "Blog", href: "/blog", icon: ExternalLink }
  ]

  const scrollToSection = (id: string) => {
    if (id.startsWith("#")) {
      document.getElementById(id.substring(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Agentic AI - <span className="text-white">Doc</span></h3>
                <p className="text-xs text-muted-foreground">Database Agent</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Production-ready AI Agent API that converts natural language into safe database operations.
              Built with enterprise-grade security and multi-database support.
            </p>
            <div className="flex space-x-3">
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
                  Star on GitHub
                </a>
              </Button>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>


        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Agentic AI. All rights reserved.
          </div>

        </div>

        {/* Tech Stack Attribution */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">Powered by</p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                React & TypeScript
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                LangChain & Google Gemini
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                MongoDB, PostgreSQL, MySQL
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-success mr-2"></span>
                WebSocket & Socket.io
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}