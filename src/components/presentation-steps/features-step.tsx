import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Database, 
  Shield, 
  Brain, 
  MessageCircle, 
  Zap, 
  Lock,
  CheckCircle,
  TrendingUp,
  Gauge
} from "lucide-react"

export function FeaturesStep() {
  const coreFeatures = [
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "Native support for MongoDB, PostgreSQL, and MySQL with unified query interface",
      highlights: ["Dynamic schema detection", "Connection pooling", "Query optimization"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Safety Guardrails",
      description: "Built-in protection against destructive operations with comprehensive security rules",
      highlights: ["SQL injection prevention", "Query validation", "Access control"],
      color: "success"
    },
    {
      icon: Brain,
      title: "AI Learning & Memory",
      description: "Remembers user patterns and preferences to provide personalized suggestions",
      highlights: ["User skill assessment", "Query pattern recognition", "Personalized responses"],
      color: "secondary"
    }
  ]

  const additionalFeatures = [
    { icon: MessageCircle, title: "WebSocket Chat", feature: "Real-time communication" },
    { icon: Zap, title: "Plan → Execute → Analyze", feature: "Intelligent workflow" },
    { icon: Lock, title: "JWT Authentication", feature: "Secure access control" },
    { icon: TrendingUp, title: "Performance Analytics", feature: "Query optimization insights" },
    { icon: Gauge, title: "Rate Limiting", feature: "Resource protection" }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Core Features
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Powerful Features</span> Built for Production
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enterprise-grade functionality with cutting-edge AI technology
        </p>
      </div>

      {/* Core Features */}
      <div className="space-y-6">
        {coreFeatures.map((feature, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-${feature.color}/10`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm bg-muted/30 rounded-full px-3 py-1">
                        <CheckCircle className="h-3 w-3 text-success mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Additional Features Grid */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Additional Capabilities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalFeatures.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 rounded-xl glass-card">
              <div className="p-2 rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.feature}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="text-center p-6 rounded-xl bg-gradient-primary/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-3 text-primary">🚀 Production-Ready Architecture</h3>
        <p className="text-muted-foreground mb-4">
          Built with enterprise requirements in mind - from development to deployment
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            Horizontal Scaling
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            High Availability
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            Comprehensive Monitoring
          </div>
        </div>
      </div>
    </div>
  )
}