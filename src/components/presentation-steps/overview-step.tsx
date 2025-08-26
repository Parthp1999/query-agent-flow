import { Badge } from "@/components/ui/badge"
import { Brain, Database, MessageCircle, Zap, Shield, Users } from "lucide-react"

export function OverviewStep() {
  const highlights = [
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "MongoDB, PostgreSQL, MySQL",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Natural language processing",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Safety guardrails & validation",
      color: "success"
    },
    {
      icon: MessageCircle,
      title: "Real-time Communication",
      description: "WebSocket chat interface",
      color: "accent"
    }
  ]

  const stats = [
    { value: "< 1s", label: "Query Response Time" },
    { value: "1000+", label: "Concurrent Users" },
    { value: "99.9%", label: "System Uptime" },
    { value: "10k/min", label: "Queries Processed" }
  ]

  return (
    <div className="space-y-8">
      {/* Main Introduction */}
      <div className="text-center space-y-4">
        <div className="p-4 rounded-2xl bg-gradient-primary w-fit mx-auto">
          <Brain className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold">
          Production-Ready <span className="gradient-text">AI Database Agent</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert natural language queries into safe database operations with our intelligent agent. 
          Built for enterprise use with comprehensive security and multi-database support.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors">
            <div className={`p-3 rounded-xl bg-${item.color}/10`}>
              <item.icon className={`h-6 w-6 text-${item.color}`} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 rounded-xl glass-card">
            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Value Proposition */}
      <div className="text-center p-6 rounded-xl bg-gradient-glass border border-primary/20">
        <h3 className="text-xl font-semibold mb-2">Why Choose Agentic AI?</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge className="bg-primary/10 text-primary border-primary/20">Zero SQL Knowledge Required</Badge>
          <Badge className="bg-secondary/10 text-secondary border-secondary/20">Enterprise-Grade Security</Badge>
          <Badge className="bg-success/10 text-success border-success/20">Production Ready</Badge>
          <Badge className="bg-accent/10 text-accent border-accent/20">Real-time Processing</Badge>
        </div>
      </div>
    </div>
  )
}