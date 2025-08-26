import { 
  Database, 
  Shield, 
  Zap, 
  Brain, 
  MessageCircle, 
  Users, 
  Lock,
  Gauge,
  RefreshCw,
  Code,
  Layers,
  Activity
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "Native support for MongoDB, PostgreSQL, and MySQL with unified query interface",
      badge: "Core Feature",
      color: "primary",
      highlights: ["Dynamic schema detection", "Connection pooling", "Query optimization"]
    },
    {
      icon: Shield,
      title: "Safety Guardrails",
      description: "Built-in protection against destructive operations with comprehensive security rules",
      badge: "Security",
      color: "success",
      highlights: ["SQL injection prevention", "Query validation", "Access control"]
    },
    {
      icon: Brain,
      title: "AI Learning & Memory",
      description: "Remembers user patterns and preferences to provide personalized suggestions",
      badge: "Intelligence",
      color: "secondary",
      highlights: ["User skill assessment", "Query pattern recognition", "Personalized responses"]
    },
    {
      icon: MessageCircle,
      title: "WebSocket Chat",
      description: "Real-time communication with session management and typing indicators",
      badge: "Real-time",
      color: "accent",
      highlights: ["Live chat sessions", "Message persistence", "Multi-user support"]
    },
    {
      icon: Zap,
      title: "Plan → Execute → Analyze",
      description: "Intelligent workflow that plans queries, executes safely, and analyzes results",
      badge: "Workflow",
      color: "warning",
      highlights: ["Smart query planning", "Dry-run previews", "Result analysis"]
    },
    {
      icon: Lock,
      title: "Authentication & Security",
      description: "JWT-based authentication with user-specific data isolation and logging",
      badge: "Security",
      color: "destructive",
      highlights: ["JWT tokens", "User isolation", "Audit logging"]
    }
  ]

  const stats = [
    { icon: Gauge, label: "Query Speed", value: "< 1s", description: "Average response time" },
    { icon: Users, label: "Concurrent Users", value: "1000+", description: "Supported connections" },
    { icon: RefreshCw, label: "Uptime", value: "99.9%", description: "System availability" },
    { icon: Activity, label: "Throughput", value: "10k/min", description: "Queries per minute" }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Layers className="h-3 w-3 mr-2" />
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            Built for Production
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agent combines cutting-edge technology with enterprise-grade reliability 
            to deliver seamless database interactions through natural language.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center interactive-card">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card interactive-card group hover:glow-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-3 rounded-xl bg-${feature.color}/10`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`bg-${feature.color}/10 text-${feature.color} border-${feature.color}/20`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">And Many More...</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Schema Registry with TTL",
              "Connection Validation", 
              "Row Limits & Timeouts",
              "Capability Profiling",
              "Keyword Matching",
              "Response Shaping",
              "Request Correlation",
              "JSON Logging",
              "Swagger Documentation",
              "HTTP Test Samples"
            ].map((feature, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="glass-card hover:bg-primary/10 transition-colors cursor-default"
              >
                <Code className="h-3 w-3 mr-2" />
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}