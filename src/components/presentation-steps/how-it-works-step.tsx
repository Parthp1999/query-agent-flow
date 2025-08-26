import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  Search, 
  Brain, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Play,
  Code
} from "lucide-react"

export function HowItWorksStep() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      step: 1,
      title: "Natural Language Input",
      icon: MessageCircle,
      color: "primary",
      description: "User sends a natural language query",
      example: "Get all users with Gmail addresses created in the last week",
      details: ["WebSocket/HTTP API", "JWT authentication", "Session management"]
    },
    {
      step: 2,
      title: "Query Analysis", 
      icon: Search,
      color: "secondary",
      description: "AI analyzes query intent and requirements",
      example: "✓ Query type: FIND\n✓ Collection: users\n✓ Filters: email, date\n✓ Complexity: Medium",
      details: ["Intent classification", "Entity extraction", "Context understanding"]
    },
    {
      step: 3,
      title: "Smart Planning",
      icon: Brain, 
      color: "accent",
      description: "Create execution plan with safety checks",
      example: "✓ Database: MongoDB\n✓ Query: find({email: /@gmail\\.com$/})\n✓ Safety: Validated\n✓ Performance: Optimized",
      details: ["Query optimization", "Safety guardrails", "Resource estimation"]
    },
    {
      step: 4,
      title: "Safe Execution",
      icon: Zap,
      color: "success", 
      description: "Execute query with monitoring",
      example: "✓ Connection: Pooled\n✓ Query: db.users.find(...)\n✓ Results: 42 documents\n✓ Time: 0.85s",
      details: ["Connection pooling", "Query execution", "Performance monitoring"]
    },
    {
      step: 5,
      title: "Intelligent Response",
      icon: CheckCircle,
      color: "warning",
      description: "Generate response with insights",
      example: "Found 42 users with Gmail addresses from the last 7 days.\n\nSuggestions:\n• Sort by creation date\n• Add user activity data",
      details: ["Result summarization", "Insight generation", "Memory updates"]
    }
  ]

  const codeExample = `// WebSocket Example
socket.emit('send-message', {
  message: 'Get all users created this week',
  sessionId: 'uuid',
  dbUrl: 'mongodb://localhost:27017/mydb'
});

socket.on('agent-response', (response) => {
  console.log('Data:', response.data);
  console.log('Suggestions:', response.suggestions);
});`

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
          How It Works
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Step-by-Step</span> AI Workflow
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how our AI agent processes natural language and converts it into safe database operations
        </p>
      </div>

      {/* Interactive Steps */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Steps List */}
        <div className="space-y-4">
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
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeStep === index 
                      ? `bg-${step.color} text-white` 
                      : `bg-${step.color}/10 text-${step.color}`
                  } transition-all`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{step.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        Step {step.step}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Example */}
        <div className="space-y-6">
          {/* Current Step Demo */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-primary" />
                <span>Live Example - Step {steps[activeStep].step}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black/90 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400">AI Agent Terminal</span>
                </div>
                
                <div className="text-green-400 whitespace-pre-wrap">
                  <span className="text-blue-400">${activeStep + 1}</span> {steps[activeStep].example}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Example */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Implementation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                <code>{codeExample}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Workflow Flow */}
      <div>
        <h3 className="text-lg font-semibold text-center mb-6">Complete Workflow</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  index <= activeStep ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-primary/60 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="text-center p-6 rounded-xl bg-gradient-glass border border-primary/20">
        <h3 className="text-lg font-semibold mb-3">🎯 Workflow Benefits</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            Safety-First Approach
          </div>
          <div className="flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            Intelligent Planning
          </div>
          <div className="flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-success mr-2" />
            Continuous Learning
          </div>
        </div>
      </div>
    </div>
  )
}