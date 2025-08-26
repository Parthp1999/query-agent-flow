import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Download, 
  Play, 
  CheckCircle,
  Terminal,
  Database,
  Key,
  Rocket,
  ExternalLink,
  Github,
  Book,
  Zap,
  ArrowRight
} from "lucide-react"

export function GettingStartedStep() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Clone & Install",
      icon: Download,
      description: "Get the code and install dependencies", 
      time: "2 min",
      commands: [
        "git clone https://github.com/o1sumit/ai-agent-api.git",
        "cd ai-agent-api",
        "npm install"
      ]
    },
    {
      title: "Environment Setup",
      icon: Key,
      description: "Configure your API keys and database URLs",
      time: "3 min",
      commands: [
        "cp .env.example .env.development.local",
        "# Add your GOOGLE_API_KEY",
        "# Add your database URLs"
      ]
    },
    {
      title: "Start Development",
      icon: Play,
      description: "Launch the development server",
      time: "1 min",
      commands: [
        "npm run dev",
        "# Server starts on http://localhost:3000",
        "# Playground at /playground"
      ]
    },
    {
      title: "First Query",
      icon: Zap,
      description: "Send your first natural language query",
      time: "2 min",
      commands: [
        "# Login to get JWT token",
        "# Send query via API or WebSocket",
        "# View results and suggestions"
      ]
    }
  ]

  const quickOptions = [
    {
      title: "Docker Setup",
      description: "Get started with Docker in 5 minutes",
      icon: Terminal,
      badge: "Recommended",
      color: "primary"
    },
    {
      title: "Manual Setup",
      description: "Step-by-step local development",
      icon: Download,
      badge: "Flexible", 
      color: "secondary"
    },
    {
      title: "Cloud Deploy",
      description: "Deploy to production",
      icon: Rocket,
      badge: "Production",
      color: "accent"
    }
  ]

  const resources = [
    {
      title: "API Documentation",
      description: "Complete reference with examples",
      icon: Book,
      href: "/api-docs"
    },
    {
      title: "GitHub Repository",
      description: "Source code and examples",
      icon: Github,
      href: "https://github.com/your-org/agentic-ai"
    },
    {
      title: "Interactive Playground",
      description: "Try the API in your browser",
      icon: Play,
      href: "/playground"
    },
    {
      title: "Example Projects",
      description: "Sample implementations",
      icon: ExternalLink,
      href: "/examples"
    }
  ]

  const environmentVars = [
    { key: "GOOGLE_API_KEY", description: "Google Gemini API key for AI processing", required: true },
    { key: "SECRET_KEY", description: "JWT secret for authentication", required: true },
    { key: "MONGODB_URL", description: "MongoDB connection string", required: false },
    { key: "POSTGRES_URL", description: "PostgreSQL connection string", required: false },
    { key: "MYSQL_URL", description: "MySQL connection string", required: false }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-success/10 text-success border-success/20">
          Getting Started
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Quick Start</span> Guide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get your AI Agent up and running in under 10 minutes with our step-by-step guide
        </p>
      </div>

      {/* Quick Setup Options */}
      <div className="grid md:grid-cols-3 gap-6">
        {quickOptions.map((option, index) => (
          <Card key={index} className="glass-card text-center hover:glow-border transition-all cursor-pointer">
            <CardContent className="pt-6">
              <div className={`p-3 rounded-xl bg-${option.color}/10 w-fit mx-auto mb-4`}>
                <option.icon className={`h-6 w-6 text-${option.color}`} />
              </div>
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
              <Badge className={`bg-${option.color}/10 text-${option.color} border-${option.color}/20`}>
                {option.badge}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Step-by-Step Installation */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Steps List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Installation Steps</h3>
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`glass-card cursor-pointer transition-all ${
                activeStep === index 
                  ? 'glow-border bg-primary/5' 
                  : 'hover:bg-muted/20'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeStep === index 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  } transition-all`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{step.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Command Display */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>{steps[activeStep].title}</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Step {activeStep + 1} of {steps.length} • {steps[activeStep].time}
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-black/90 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400">Terminal</span>
                </div>
                
                <div className="space-y-2 text-green-400">
                  {steps[activeStep].commands.map((command, idx) => (
                    <div key={idx}>
                      <span className="text-blue-400">$ </span>
                      {command}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="glass-button"
            >
              Previous
            </Button>
            <Button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="bg-gradient-primary hover:opacity-90"
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Required Configuration</h3>
        <Card className="glass-card max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
            <p className="text-sm text-muted-foreground">
              Add these to your .env.development.local file
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {environmentVars.map((env, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-3">
                    <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded">
                      {env.key}
                    </code>
                    {env.required && (
                      <Badge className="bg-destructive/10 text-destructive border-destructive/20 text-xs">
                        Required
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{env.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Additional Resources</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="glass-card text-center hover:glow-border transition-all cursor-pointer">
              <CardContent className="pt-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{resource.title}</h4>
                <p className="text-xs text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

  
    </div>
  )
}