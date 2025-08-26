import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Zap,
  ExternalLink,
  Play,
  Settings
} from "lucide-react"

export function APISection() {
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
      auth: true,
      description: "Process natural language query and execute database operations",
      badge: "Core API",
      color: "primary"
    },
    {
      method: "POST", 
      path: "/auth/login",
      auth: false,
      description: "Authenticate user and receive JWT token",
      badge: "Authentication",
      color: "success"
    },
    {
      method: "GET",
      path: "/api/ai-agent/stats", 
      auth: true,
      description: "Get user query statistics and learning insights",
      badge: "Analytics",
      color: "secondary"
    },
    {
      method: "POST",
      path: "/api/ai-agent/feedback",
      auth: true, 
      description: "Submit feedback to improve AI responses",
      badge: "Learning",
      color: "accent"
    }
  ]

  const websocketEvents = [
    {
      event: "join-session",
      direction: "client → server",
      description: "Join or create a chat session",
      badge: "Session"
    },
    {
      event: "send-message",
      direction: "client → server", 
      description: "Send natural language query",
      badge: "Query"
    },
    {
      event: "agent-response",
      direction: "server → client",
      description: "Receive AI agent response with data",
      badge: "Response"
    },
    {
      event: "agent-thinking", 
      direction: "server → client",
      description: "Real-time thinking process updates",
      badge: "Status"
    }
  ]

  const codeExamples = {
    query: `// Natural Language Query
POST /api/ai-agent/query
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "query": "Get all users with Gmail addresses created in the last week",
  "dbUrl": "mongodb://localhost:27017/myapp",
  "dbType": "mongodb",
  "dryRun": false,
  "insight": true
}

// Response
{
  "data": [
    {
      "_id": "64a1b2c3d4e5f6789012345",
      "email": "john@gmail.com",
      "createdAt": "2023-07-01T10:30:00Z",
      "profile": { "name": "John Doe" }
    }
    // ... more results
  ],
  "message": "Found 42 users with Gmail addresses from the last 7 days.",
  "suggestions": [
    "Sort by creation date",
    "Add user activity data", 
    "Export to CSV format"
  ],
  "executionTime": 850,
  "memoryInsights": {
    "userLevel": "intermediate",
    "queryPattern": "find_email_date",
    "similarQueries": 3
  },
  "plan": {
    "steps": ["analyze", "validate", "execute", "summarize"],
    "confidence": 0.95
  }
}`,

    websocket: `// WebSocket Connection
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: {
    token: 'your-jwt-token-here'
  }
});

// Connection Events
socket.on('connect', () => {
  console.log('Connected to AI Agent');
});

// Join Session
socket.emit('join-session', {
  sessionId: 'session-uuid',
  userId: 'user-id'
});

// Send Query
socket.emit('send-message', {
  message: 'Show me top 5 products by revenue',
  sessionId: 'session-uuid',
  dbUrl: 'postgres://user:pass@localhost:5432/store',
  dbType: 'postgres'
});

// Listen for Responses
socket.on('agent-thinking', (data) => {
  console.log('AI is thinking:', data.message);
});

socket.on('agent-response', (response) => {
  console.log('Response:', response.message);
  console.log('Data:', response.data);
  console.log('Tools used:', response.toolsUsed);
});`,

    auth: `// Authentication Flow
// 1. Login to get JWT token
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "id": "64a1b2c3d4e5f6789012345",
    "email": "user@example.com",
    "profile": { "name": "John Doe" }
  }
}

// 2. Use token in subsequent requests
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,

    dryRun: `// Dry Run Example - Preview Without Execution
POST /api/ai-agent/query
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "query": "Delete all inactive users older than 2 years",
  "dbUrl": "mongodb://localhost:27017/myapp",
  "dryRun": true,  // Preview mode - no actual execution
  "insight": true
}

// Dry Run Response
{
  "plan": {
    "operation": "DELETE",
    "collection": "users", 
    "filter": {
      "lastActive": { "$lt": "2021-07-01T00:00:00Z" },
      "status": "inactive"
    },
    "estimatedAffected": 156,
    "safety": "APPROVED", 
    "warnings": ["Destructive operation - use with caution"]
  },
  "executedQueries": [
    "db.users.find({lastActive: {$lt: ISODate('2021-07-01')}, status: 'inactive'}).count()"
  ],
  "message": "Dry run completed. 156 users would be affected.",
  "executed": false  // Confirms no actual execution
}`
  }

  const statusCodes = [
    { code: "200", description: "Success - Query executed successfully", color: "success" },
    { code: "400", description: "Bad Request - Invalid query or parameters", color: "warning" },
    { code: "401", description: "Unauthorized - Invalid or missing JWT token", color: "destructive" },
    { code: "403", description: "Forbidden - Query blocked by safety guardrails", color: "destructive" },
    { code: "500", description: "Server Error - Internal processing error", color: "destructive" }
  ]

  return (
    <section id="api" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Code className="h-3 w-3 mr-2" />
            API Reference
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Complete API</span>
            <br />
            Documentation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive API documentation with live examples, authentication flows, 
            and WebSocket events for real-time communication.
          </p>
        </div>

        {/* API Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground">HTTP endpoints for all operations</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <MessageCircle className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">WebSocket</h3>
              <p className="text-sm text-muted-foreground">Real-time chat interface</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <Lock className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold mb-2">JWT Auth</h3>
              <p className="text-sm text-muted-foreground">Secure token-based authentication</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <Database className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Multi-DB</h3>
              <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, MySQL</p>
            </CardContent>
          </Card>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">HTTP Endpoints</h3>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge className={`bg-${endpoint.color}/10 text-${endpoint.color} border-${endpoint.color}/20`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                      {endpoint.auth && (
                        <Badge variant="outline" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Auth Required
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline">{endpoint.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* WebSocket Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">WebSocket Events</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {websocketEvents.map((event, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="font-mono text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                      {event.event}
                    </code>
                    <Badge variant="outline" className="text-xs">
                      {event.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{event.direction}</p>
                  <p className="text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Code Examples</h3>
          <Tabs defaultValue="query" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="query">Query API</TabsTrigger>
              <TabsTrigger value="websocket">WebSocket</TabsTrigger>
              <TabsTrigger value="auth">Authentication</TabsTrigger>
              <TabsTrigger value="dryRun">Dry Run</TabsTrigger>
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

        {/* Status Codes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">HTTP Status Codes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {statusCodes.map((status, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Badge className={`bg-${status.color}/10 text-${status.color} border-${status.color}/20`}>
                      {status.code}
                    </Badge>
                    <p className="text-sm">{status.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Try It Now</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary hover:opacity-90">
              <Play className="h-4 w-4 mr-2" />
              Open Playground
            </Button>
            <Button variant="outline" className="glass-button">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Swagger Docs
            </Button>
            <Button variant="outline" className="glass-button">
              <Settings className="h-4 w-4 mr-2" />
              API Configuration
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}