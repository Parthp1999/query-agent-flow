import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Code, 
  Copy, 
  CheckCircle,
  Globe,
  MessageCircle,
  Lock,
  Database,
  ExternalLink
} from "lucide-react"

export function APIStep() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      method: "POST",
      path: "/api/ai-agent/query",
      description: "Process natural language query",
      color: "primary"
    },
    {
      method: "POST", 
      path: "/auth/login",
      description: "Authenticate and get JWT token",
      color: "success"
    },
    {
      method: "GET",
      path: "/api/ai-agent/stats", 
      description: "Get user analytics and insights",
      color: "secondary"
    }
  ]

  const codeExamples = {
    query: `// Natural Language Query
POST /api/ai-agent/query
Authorization: Bearer JWT_TOKEN
Content-Type: application/json

{
  "query": "Get all users created in last week",
  "dbUrl": "mongodb://localhost:27017/myapp",
  "dbType": "mongodb",
  "insight": true
}

// Response
{
  "data": [/* results */],
  "message": "Found 42 users from last 7 days",
  "suggestions": ["Sort by date", "Add filters"],
  "executionTime": 850,
  "memoryInsights": {
    "userLevel": "intermediate",
    "queryPattern": "find_date"
  }
}`,

    websocket: `// WebSocket Real-time Chat
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: { token: 'YOUR_JWT_TOKEN' }
});

// Join session
socket.emit('join-session', {
  sessionId: 'uuid',
  userId: 'user-id'
});

// Send query
socket.emit('send-message', {
  message: 'Show top 5 products by revenue',
  sessionId: 'uuid',
  dbUrl: 'postgres://localhost:5432/store'
});

// Listen for responses
socket.on('agent-response', (response) => {
  console.log('AI Response:', response.message);
  console.log('Data:', response.data);
});`,

    auth: `// Authentication Flow
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "data": {
    "id": "user-id",
    "email": "user@example.com"
  }
}

// Use token in requests
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`
  }

  const features = [
    {
      icon: Globe,
      title: "REST API",
      description: "HTTP endpoints for all operations"
    },
    {
      icon: MessageCircle,
      title: "WebSocket",
      description: "Real-time chat interface"
    },
    {
      icon: Lock,
      title: "JWT Auth",
      description: "Secure token authentication"
    },
    {
      icon: Database,
      title: "Multi-DB",
      description: "MongoDB, PostgreSQL, MySQL"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          API Reference
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Complete API</span> Documentation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          RESTful API and WebSocket interface with comprehensive authentication and multi-database support
        </p>
      </div>

      {/* API Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="glass-card text-center">
            <CardContent className="pt-6">
              <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Endpoints */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Key Endpoints</h3>
        <div className="space-y-3">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Badge className={`bg-${endpoint.color}/10 text-${endpoint.color} border-${endpoint.color}/20`}>
                    {endpoint.method}
                  </Badge>
                  <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded flex-1">
                    {endpoint.path}
                  </code>
                  <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Implementation Examples</h3>
        <Tabs defaultValue="query" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 glass-card">
            <TabsTrigger value="query">Query API</TabsTrigger>
            <TabsTrigger value="websocket">WebSocket</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
          </TabsList>
          
          {Object.entries(codeExamples).map(([key, code]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="capitalize">{key} Example</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(code, key)}
                      className="glass-button"
                    >
                      {copiedCode === key ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copiedCode === key ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{code}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Response Format */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Standard Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge className="bg-success/10 text-success">200 OK</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span>JSON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Auth:</span>
                <span>JWT Bearer Token</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rate Limit:</span>
                <span>100/min per user</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">WebSocket Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>join-session</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                <span>send-message</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-3"></div>
                <span>agent-response</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                <span>agent-thinking</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      
    </div>
  )
}