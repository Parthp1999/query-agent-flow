import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Rocket, 
  Users, 
  TrendingUp,
  Github,
  ExternalLink,
  Play,
  Book,
  MessageCircle,
  Mail,
  Brain,
  Database,
  Shield,
  Zap
} from "lucide-react"

export function ConclusionStep() {
  const keyTakeaways = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Natural language to database operations with learning capabilities",
      color: "primary"
    },
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "MongoDB, PostgreSQL, MySQL with unified interface",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive safety guardrails and compliance standards",
      color: "success"
    },
    {
      icon: Zap,
      title: "Production Ready",
      description: "Built for scale with high performance and reliability",
      color: "accent"
    }
  ]

  const benefits = [
    "Reduce development time by 70%",
    "Eliminate SQL knowledge requirements",
    "Built-in security and compliance",
    "Real-time processing capabilities",
    "Scalable enterprise architecture",
    "Comprehensive API documentation"
  ]

  const nextSteps = [
    {
      step: 1,
      title: "Try the Playground",
      description: "Experience the AI agent in action",
      action: "Launch Playground",
      icon: Play,
      color: "primary"
    },
    {
      step: 2,
      title: "Read Documentation",
      description: "Explore comprehensive API guides",
      action: "View Docs",
      icon: Book,
      color: "secondary"
    },
    {
      step: 3,
      title: "Get the Code",
      description: "Clone and start building",
      action: "GitHub Repo",
      icon: Github,
      color: "success"
    },
    {
      step: 4,
      title: "Join Community",
      description: "Connect with other developers",
      action: "Join Discord",
      icon: MessageCircle,
      color: "accent"
    }
  ]

  const stats = [
    { value: "10k+", label: "Queries Processed", icon: TrendingUp },
    { value: "500+", label: "Developers Using", icon: Users },
    { value: "99.9%", label: "Uptime SLA", icon: CheckCircle },
    { value: "< 1s", label: "Avg Response", icon: Zap }
  ]

  const testimonials = [
    {
      quote: "Transformed how we interact with our database. No more complex SQL queries!",
      author: "Sarah Chen",
      role: "Lead Developer",
      company: "TechCorp"
    },
    {
      quote: "The security features give us confidence to use this in production.",
      author: "Mike Rodriguez", 
      role: "DevOps Engineer",
      company: "DataFlow Inc"
    },
    {
      quote: "Cut our development time in half. The AI suggestions are incredibly helpful.",
      author: "Jessica Park",
      role: "Full-Stack Developer", 
      company: "StartupXYZ"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Thank You
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Ready to Transform</span>
          <br />
          Your Database Experience?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join the future of database interactions with our AI-powered agent. 
          Built for developers, trusted by enterprises.
        </p>
      </div>

      {/* Key Takeaways */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">What You've Learned</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyTakeaways.map((item, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="pt-6">
                <div className={`p-3 rounded-xl bg-${item.color}/10 w-fit mx-auto mb-4`}>
                  <item.icon className={`h-6 w-6 text-${item.color}`} />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Stats */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Performance at Scale</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Recap */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-6">Why Choose Agentic AI?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 rounded-xl glass-card">
              <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">What Developers Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="pt-6">
                <p className="text-sm italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
     

      {/* Final Call to Action */}
      

     
    </div>
  )
}