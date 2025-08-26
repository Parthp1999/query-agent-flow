import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Database, MessageCircle, Play, Github } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-floating" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-floating" style={{animationDelay: "4s"}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Zap className="h-3 w-3 mr-2" />
              Production-Ready AI Agent API
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Agentic AI</span>
            <br />
            <span className="text-foreground">Database Agent</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}}>
            Convert natural language into safe database operations with our intelligent agent. 
            Supports <span className="text-primary font-semibold">MongoDB</span>, <span className="text-secondary font-semibold">PostgreSQL</span>, and <span className="text-accent font-semibold">MySQL</span> with built-in safety guardrails.
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Multi-DB Support</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <MessageCircle className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">WebSocket Chat</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Real-time Processing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{animationDelay: "0.6s"}}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg glow-primary group"
              onClick={() => scrollToSection("getting-started")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button px-8 py-4 text-lg group"
              onClick={() => window.location.href = '/presentation'}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Presentation Mode
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button px-8 py-4 text-lg"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto animate-scale-in" style={{animationDelay: "0.8s"}}>
            <div className="glass-card p-8 rounded-2xl shadow-large">
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-4">AI Agent Terminal</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-mono">user:</span>
                    <span className="text-foreground">"Get all users with Gmail addresses created in the last week"</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-accent font-mono">agent:</span>
                    <div className="space-y-2">
                      <p className="text-success">✓ Planning query execution...</p>
                      <p className="text-success">✓ Applying safety guardrails...</p>
                      <p className="text-success">✓ Executing MongoDB query...</p>
                      <p className="text-foreground">Found 42 users with Gmail addresses from the last 7 days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-glow-pulse">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}