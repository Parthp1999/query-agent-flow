import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Brain, 
  Zap, 
  CheckCircle, 
  Code,
  MessageCircle,
  Database,
  Shield,
  Users,
  TrendingUp,
  Play,
  Pause,
  RotateCcw
} from "lucide-react"

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const steps = [
    {
      step: 1,
      title: "Natural Language Input",
      icon: MessageCircle,
      color: "primary",
      description: "User sends a natural language query through WebSocket or HTTP API",
      example: {
        input: "Get all users with Gmail addresses created in the last week",
        type: "user-query"
      },
      details: [
        "WebSocket real-time communication",
        "HTTP REST API endpoints", 
        "JWT token authentication",
        "Session management"
      ]
    },
    {
      step: 2,
      title: "Query Analysis", 
      icon: Search,
      color: "secondary",
      description: "AI agent analyzes the query to understand intent and requirements",
      example: {
        input: "Analyzing query intent...\n✓ Query type: FIND\n✓ Collection: users\n✓ Filters: email domain, date range\n✓ Complexity: Medium",
        type: "analysis"
      },
      details: [
        "Intent classification",
        "Entity extraction",
        "Complexity assessment", 
        "Context understanding"
      ]
    },
    {
      step: 3,
      title: "Smart Planning",
      icon: Brain, 
      color: "accent",
      description: "Create execution plan with safety checks and optimization",
      example: {
        input: "Creating execution plan...\n✓ Database: MongoDB\n✓ Query: find({email: /@gmail\\.com$/})\n✓ Safety: Validated\n✓ Performance: Optimized",
        type: "planning"
      },
      details: [
        "Query optimization",
        "Safety guardrails",
        "Performance tuning",
        "Resource estimation"
      ]
    },
    {
      step: 4,
      title: "Safe Execution",
      icon: Zap,
      color: "success", 
      description: "Execute query with connection pooling and monitoring",
      example: {
        input: "Executing query...\n✓ Connection: Pooled\n✓ Query: db.users.find(...)\n✓ Results: 42 documents\n✓ Time: 0.85s",
        type: "execution"
      },
      details: [
        "Connection pooling", 
        "Query execution",
        "Result processing",
        "Performance monitoring"
      ]
    },
    {
      step: 5,
      title: "Intelligent Response",
      icon: CheckCircle,
      color: "warning",
      description: "Generate response with insights and suggestions",
      example: {
        input: "Found 42 users with Gmail addresses from the last 7 days.\n\nSuggestions:\n• Sort by creation date\n• Add user activity data\n• Export to CSV",
        type: "response"
      },
      details: [
        "Result summarization",
        "Insight generation", 
        "Personalized suggestions",
        "Memory updates"
      ]
    }
  ]

  const codeExamples = {
    websocket: `// WebSocket Example
const socket = io('http://localhost:3000', {
  auth: { token: 'your-jwt-token' }
});

// Join session
socket.emit('join-session', {
  sessionId: 'uuid',
  userId: 'user-id'
});

// Send query
socket.emit('send-message', {
  message: 'Get all users created this week',
  sessionId: 'uuid',
  dbUrl: 'mongodb://localhost:27017/mydb',
  dryRun: false
});

// Listen for response
socket.on('agent-response', (response) => {
  console.log('AI Response:', response.message);
  console.log('Data:', response.data);
  console.log('Suggestions:', response.followUpQuestions);
});`,
    
    http: `// HTTP API Example
POST /api/ai-agent/query
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "query": "Show me top 5 products by revenue",
  "dbUrl": "postgres://user:pass@localhost:5432/store",
  "dbType": "postgres",
  "dryRun": false,
  "insight": true
}

// Response
{
  "data": [/* query results */],
  "message": "Found top 5 products by revenue",
  "suggestions": ["Add date filters", "Include product categories"],
  "executionTime": 1250,
  "memoryInsights": {
    "userLevel": "intermediate",
    "queryPattern": "analytics_revenue"
  }
}`,
    
    memory: `// Memory & Learning System
{
  "userId": "64a1b2c3d4e5f6789012345",
  "queryHistory": [
    {
      "pattern": "find_email",
      "frequency": 8,
      "lastUsed": "2023-07-02T09:15:00Z",
      "successRate": 0.95
    }
  ],
  "learningProfile": {
    "skillLevel": "intermediate", // beginner → intermediate → advanced
    "preferredResponseDetail": "detailed",
    "frequentCollections": ["users", "orders", "products"]
  },
  "suggestions": [
    "Based on your queries, try adding sorting",
    "You often query user data - consider indexing email field"
  ]
}`
  }

  const handleStepAnimation = (stepIndex: number) => {
    setActiveStep(stepIndex)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Auto-advance through steps
      let currentStep = 0
      const interval = setInterval(() => {
        currentStep = (currentStep + 1) % steps.length
        setActiveStep(currentStep)
        if (currentStep === 0) {
          setIsPlaying(false)
          clearInterval(interval)
        }
      }, 2000)
    }
  }

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Brain className="h-3 w-3 mr-2" />
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Step-by-Step</span>
            <br />
            AI Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI agent processes natural language queries and converts them 
            into safe, optimized database operations.
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className="mb-16">
          {/* Playback Controls */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={togglePlayback}
                className="glass-button"
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'} Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveStep(0)}
                className="glass-button"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Step Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  className={`glass-card cursor-pointer transition-all ${
                    activeStep === index 
                      ? 'glow-border bg-primary/5' 
                      : 'hover:bg-muted/20'
                  }`}
                  onClick={() => handleStepAnimation(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${
                        activeStep === index 
                          ? `bg-${step.color} text-white` 
                          : `bg-${step.color}/10 text-${step.color}`
                      } transition-all`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            Step {step.step}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
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
            <div className="sticky top-24">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5" />
                    <span>Live Example</span>
                  </CardTitle>
                  <CardDescription>
                    {steps[activeStep].title} - Step {steps[activeStep].step}
                  </CardDescription>
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
                    
                    <div className="text-green-400">
                      <span className="text-blue-400">$</span> {
                        steps[activeStep].example.type === 'user-query' ? 
                        `"${steps[activeStep].example.input}"` :
                        steps[activeStep].example.input
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Implementation Examples</h3>
          <Tabs defaultValue="websocket" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 glass-card">
              <TabsTrigger value="websocket">WebSocket</TabsTrigger>
              <TabsTrigger value="http">HTTP API</TabsTrigger>
              <TabsTrigger value="memory">Memory System</TabsTrigger>
            </TabsList>
            
            <TabsContent value="websocket" className="mt-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>WebSocket Real-time Chat</CardTitle>
                  <CardDescription>
                    Connect and send queries through WebSocket for real-time responses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{codeExamples.websocket}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="http" className="mt-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>HTTP REST API</CardTitle>
                  <CardDescription>
                    Direct API calls with comprehensive response data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{codeExamples.http}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="memory" className="mt-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>AI Memory & Learning</CardTitle>
                  <CardDescription>
                    How the system learns from user interactions and provides personalized responses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{codeExamples.memory}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learning & Adaptation</h3>
              <p className="text-muted-foreground">
                System learns from every interaction to provide better suggestions and faster responses.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety Guaranteed</h3>
              <p className="text-muted-foreground">
                Multiple layers of security ensure no destructive operations can be executed.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
              <p className="text-muted-foreground">
                Personalized responses based on user skill level and query patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}