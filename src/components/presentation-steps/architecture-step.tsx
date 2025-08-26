import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Monitor, 
  Server, 
  Brain, 
  Database, 
  ArrowRight,
  Layers,
  Shield,
  Zap,
  Users
} from "lucide-react"

export function ArchitectureStep() {
  const layers = [
    {
      title: "Client Layer",
      icon: Monitor,
      color: "primary",
      description: "React UI with real-time communication",
      components: ["WebSocket Client", "JWT Auth", "Real-time Updates"]
    },
    {
      title: "Server Layer", 
      icon: Server,
      color: "secondary",
      description: "Express + Socket.io with routing",
      components: ["REST API", "WebSocket Server", "Session Management"]
    },
    {
      title: "Agent Layer",
      icon: Brain,
      color: "accent",
      description: "AI agents with safety guardrails",
      components: ["LangGraph StateGraph", "Safety Validation", "Query Planning"]
    },
    {
      title: "Infrastructure",
      icon: Layers,
      color: "success", 
      description: "Shared services and caching",
      components: ["Connection Pooling", "Schema Detection", "Memory Service"]
    },
    {
      title: "Database Layer",
      icon: Database,
      color: "warning",
      description: "Multi-database support",
      components: ["MongoDB", "PostgreSQL", "MySQL"]
    }
  ]

  const workflow = [
    { step: "Authentication", description: "JWT token validation" },
    { step: "Query Analysis", description: "Natural language processing" },
    { step: "Safety Check", description: "Guardrails validation" },
    { step: "Execution", description: "Database operations" },
    { step: "Response", description: "Results & insights" }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security with comprehensive audit logging"
    },
    {
      icon: Zap,
      title: "High Performance", 
      description: "Connection pooling and optimized query execution"
    },
    {
      icon: Users,
      title: "Scalable",
      description: "Handles thousands of concurrent users"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
          System Architecture
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Enterprise Architecture</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Layered architecture designed for high performance, scalability, and maintainability
        </p>
      </div>

      {/* Architecture Layers */}
      <div className="relative">
        {/* Connection Flow */}
        <div className="hidden lg:block absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-4">
          {layers.map((layer, index) => (
            <div key={index} className="relative">
              <Card className="glass-card text-center h-full">
                <CardHeader>
                  <div className={`p-3 rounded-xl bg-${layer.color}/10 mx-auto mb-3 w-fit`}>
                    <layer.icon className={`h-6 w-6 text-${layer.color}`} />
                  </div>
                  <CardTitle className="text-lg">{layer.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <div key={idx} className="text-xs bg-muted/30 rounded px-2 py-1">
                        {component}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow for flow */}
              {index < layers.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Request Workflow */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Request Workflow</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {workflow.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-2">
                  {index + 1}
                </div>
                <div className="text-sm font-medium">{step.step}</div>
                <div className="text-xs text-muted-foreground">{step.description}</div>
              </div>
              {index < workflow.length - 1 && (
                <ArrowRight className="h-4 w-4 text-primary/60 mx-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Architecture Benefits</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="pt-6">
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical Highlights */}
      <div className="text-center p-6 rounded-xl bg-gradient-glass border border-primary/20">
        <h3 className="text-lg font-semibold mb-3">🏗️ Technical Excellence</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Express.js</Badge>
          <Badge variant="outline">Socket.io</Badge>
          <Badge variant="outline">LangChain</Badge>
          <Badge variant="outline">MongoDB</Badge>
          <Badge variant="outline">PostgreSQL</Badge>
          <Badge variant="outline">MySQL</Badge>
        </div>
      </div>
    </div>
  )
}