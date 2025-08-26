import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Monitor, 
  Server, 
  Brain, 
  Database, 
  ArrowRight, 
  MessageCircle,
  Shield,
  Layers,
  Zap,
  Users,
  Lock,
  Activity
} from "lucide-react"

export function ArchitectureSection() {
  const architectureLayers = [
    {
      title: "Client Layer",
      icon: Monitor,
      color: "primary",
      description: "Playground UI with WebSocket client and authentication flow",
      components: [
        "React Playground UI",
        "Socket.io Client", 
        "JWT Authentication",
        "Real-time Updates"
      ]
    },
    {
      title: "Server Layer", 
      icon: Server,
      color: "secondary",
      description: "Express + Socket.io server with routing and session management",
      components: [
        "Express REST API",
        "WebSocket Server",
        "JWT Middleware",
        "Session Management"
      ]
    },
    {
      title: "Agent Layer",
      icon: Brain,
      color: "accent",
      description: "AI agents with Plan → Execute → Analyze workflow",
      components: [
        "AIAgentService",
        "DatabaseAgentService", 
        "LangGraph StateGraph",
        "Safety Guardrails"
      ]
    },
    {
      title: "Infrastructure",
      icon: Layers,
      color: "success", 
      description: "Shared services for connection pooling, schema detection, and memory",
      components: [
        "DbPoolService",
        "Schema Detectors",
        "AIMemoryService",
        "Mongoose Models"
      ]
    },
    {
      title: "Database Layer",
      icon: Database,
      color: "warning",
      description: "Multi-database support with connection pooling",
      components: [
        "MongoDB",
        "PostgreSQL", 
        "MySQL",
        "Connection Pools"
      ]
    }
  ]

  const workflow = [
    {
      step: 1,
      title: "Authentication",
      icon: Lock,
      description: "User logs in and receives JWT token for secure access"
    },
    {
      step: 2, 
      title: "Query Input",
      icon: MessageCircle,
      description: "Natural language query sent via WebSocket or HTTP API"
    },
    {
      step: 3,
      title: "Planning",
      icon: Brain,
      description: "AI agent analyzes query and creates execution plan with safety checks"
    },
    {
      step: 4,
      title: "Execution", 
      icon: Zap,
      description: "Query executed against target database with connection pooling"
    },
    {
      step: 5,
      title: "Response",
      icon: Activity,
      description: "Results processed and returned with insights and suggestions"
    }
  ]

  return (
    <section id="architecture" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            <Layers className="h-3 w-3 mr-2" />
            System Architecture
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Built for Scale</span>
            <br />
            Enterprise Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A layered architecture designed for high performance, scalability, and maintainability 
            with clear separation of concerns.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
            
            {/* Architecture Layers */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {architectureLayers.map((layer, index) => (
                <Card key={index} className="glass-card interactive-card text-center relative">
                  <CardHeader>
                    <div className={`p-4 rounded-xl bg-${layer.color}/10 mx-auto mb-4 w-fit`}>
                      <layer.icon className={`h-8 w-8 text-${layer.color}`} />
                    </div>
                    <CardTitle className="text-lg">{layer.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {layer.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {layer.components.map((component, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground bg-muted/30 rounded px-2 py-1">
                          {component}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Arrow for desktop */}
                  {index < architectureLayers.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary/60" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Request Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass-card text-center h-full">
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Flow Arrow */}
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <Shield className="h-8 w-8 text-success mb-2" />
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built-in security with JWT authentication, query validation, and comprehensive audit logging.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader>
              <Zap className="h-8 w-8 text-warning mb-2" />
              <CardTitle>High Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connection pooling, schema caching, and optimized query execution for sub-second responses.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader>
              <Users className="h-8 w-8 text-accent mb-2" />
              <CardTitle>Scalable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Designed to handle thousands of concurrent users with horizontal scaling capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}