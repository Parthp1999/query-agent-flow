import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Download, 
  Play, 
  CheckCircle,
  Terminal,
  Database,
  Key,
  Rocket,
  Copy,
  ExternalLink,
  Github,
  Book,
  Zap
} from "lucide-react"

export function GettingStartedSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const steps = [
    {
      title: "Installation",
      icon: Download,
      description: "Clone the repository and install dependencies",
      time: "2 minutes",
      code: `# Clone the repository
git clone https://github.com/o1sumit/ai-agent-api.git

# Navigate to the project
cd ai-agent-api

# Install dependencies
npm install

# Install additional packages if needed
npm install @types/node dotenv`
    },
    {
      title: "Environment Setup",
      icon: Key,
      description: "Configure your environment variables",
      time: "3 minutes", 
      code: `# Create .env.development.local
SECRET_KEY=your-jwt-secret-key-here
GOOGLE_API_KEY=your-google-gemini-api-key
PORT=3000

# Optional Configuration
SCHEMA_REGISTRY_TTL_MS=86400000        # 24h schema cache
DEFAULT_ROW_LIMIT=1000                 # Query result limit
QUERY_TIMEOUT_MS=15000                 # SQL timeout
REDACT_SQL_IN_RESPONSES=false          # Hide SQL in responses
PG_POOL_MAX=10                         # Postgres pool size

# Database URLs (examples)
MONGODB_URL=mongodb://localhost:27017/myapp
POSTGRES_URL=postgres://user:pass@localhost:5432/mydb
MYSQL_URL=mysql://user:pass@localhost:3306/mydb`
    },
    {
      title: "Database Setup",
      icon: Database,
      description: "Connect your databases and verify connections",
      time: "5 minutes",
      code: `# Test MongoDB connection
node -e "
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error('✗ MongoDB failed:', err.message));
"

# Test PostgreSQL connection
node -e "
const { Client } = require('pg');
const client = new Client({ connectionString: 'postgres://user:pass@localhost:5432/mydb' });
client.connect()
  .then(() => { console.log('✓ PostgreSQL connected'); client.end(); })
  .catch(err => console.error('✗ PostgreSQL failed:', err.message));
"

# Test MySQL connection  
node -e "
const mysql = require('mysql2/promise');
mysql.createConnection('mysql://user:pass@localhost:3306/mydb')
  .then(() => console.log('✓ MySQL connected'))
  .catch(err => console.error('✗ MySQL failed:', err.message));
"`
    },
    {
      title: "Start Development",
      icon: Play,
      description: "Launch the development server",
      time: "1 minute",
      code: `# Start the development server
npm run dev

# The server will start on http://localhost:3000
# API documentation available at http://localhost:3000/api-docs
# Playground available at http://localhost:3000/playground

# Test the API
curl -X GET http://localhost:3000/api/ai-agent/status

# Expected response:
{
  "status": "operational",
  "version": "1.0.0",
  "features": ["multi-db", "websocket", "memory", "safety"],
  "uptime": "0d 0h 2m 15s"
}`
    },
    {
      title: "First Query",
      icon: Zap,
      description: "Send your first natural language query",
      time: "2 minutes",
      code: `# 1. First, authenticate to get JWT token
curl -X POST http://localhost:3000/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "demo@example.com",
    "password": "demo123"
  }'

# 2. Use the token to send a query
curl -X POST http://localhost:3000/api/ai-agent/query \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -d '{
    "query": "Get all users created in the last week",
    "dbUrl": "mongodb://localhost:27017/myapp",
    "dbType": "mongodb",
    "insight": true
  }'

# 3. Try with dry run (preview mode)
curl -X POST http://localhost:3000/api/ai-agent/query \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -d '{
    "query": "Delete inactive users older than 1 year",
    "dbUrl": "mongodb://localhost:27017/myapp", 
    "dryRun": true
  }'`
    }
  ]

  const quickStartOptions = [
    {
      title: "Docker Setup",
      description: "Get started with Docker in 5 minutes",
      icon: Terminal,
      badge: "Recommended",
      color: "primary",
      steps: ["Pull Docker image", "Configure environment", "Run container", "Access playground"]
    },
    {
      title: "Manual Setup", 
      description: "Step-by-step local development setup",
      icon: Download,
      badge: "Flexible",
      color: "secondary",
      steps: ["Clone repository", "Install dependencies", "Configure environment", "Start development"]
    },
    {
      title: "Cloud Deploy",
      description: "Deploy to cloud providers",
      icon: Rocket,
      badge: "Production",
      color: "accent", 
      steps: ["Choose provider", "Configure secrets", "Deploy service", "Setup monitoring"]
    }
  ]

  const resources = [
    {
      title: "API Documentation",
      description: "Complete API reference with examples",
      icon: Book,
      href: "/api-docs",
      badge: "Swagger"
    },
    {
      title: "GitHub Repository",
      description: "Source code and issue tracking",
      icon: Github,
      href: "https://github.com/your-org/agentic-ai-agent",
      badge: "Open Source"
    },
    {
      title: "Interactive Playground",
      description: "Try the API in your browser",
      icon: Play,
      href: "/playground",
      badge: "Live Demo"
    },
    {
      title: "Example Projects",
      description: "Sample implementations and use cases",
      icon: ExternalLink,
      href: "/examples",
      badge: "Samples"
    }
  ]

  return (
    <section id="getting-started" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            <Rocket className="h-3 w-3 mr-2" />
            Getting Started
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Quick Start</span>
            <br />
            Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your AI Agent up and running in under 10 minutes. Choose your preferred 
            setup method and follow our step-by-step guide.
          </p>
        </div>

        {/* Quick Start Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {quickStartOptions.map((option, index) => (
            <Card key={index} className="glass-card interactive-card group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-${option.color}/10`}>
                    <option.icon className={`h-6 w-6 text-${option.color}`} />
                  </div>
                  <Badge className={`bg-${option.color}/10 text-${option.color} border-${option.color}/20`}>
                    {option.badge}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {option.title}
                </CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {option.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-xs font-bold text-primary">
                        {idx + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90">
                  Start Setup
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Step-by-Step Installation</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className={`glass-card cursor-pointer transition-all ${
                    currentStep === index 
                      ? 'glow-border bg-primary/5' 
                      : 'hover:bg-muted/20'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        currentStep === index 
                          ? 'bg-primary text-white' 
                          : 'bg-primary/10 text-primary'
                      } transition-all`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {currentStep === index && (
                        <CheckCircle className="h-5 w-5 text-success" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Code Display */}
            <div className="sticky top-24">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <Terminal className="h-5 w-5" />
                        <span>{steps[currentStep].title}</span>
                      </CardTitle>
                      <CardDescription>
                        Step {currentStep + 1} of {steps.length} • {steps[currentStep].time}
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(steps[currentStep].code, `step-${currentStep}`)}
                      className="glass-button"
                    >
                      {copiedCode === `step-${currentStep}` ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copiedCode === `step-${currentStep}` ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black/90 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{steps[currentStep].code}</code>
                  </pre>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="glass-button"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Next Step
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Configuration */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Configuration Generator</h3>
          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Generate Your Environment File</CardTitle>
              <CardDescription>
                Fill in your details to generate a custom .env file
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="google-api-key">Google API Key</Label>
                  <Input 
                    id="google-api-key" 
                    placeholder="AIzaSy..." 
                    type="password"
                    className="glass-button"
                  />
                </div>
                <div>
                  <Label htmlFor="jwt-secret">JWT Secret</Label>
                  <Input 
                    id="jwt-secret" 
                    placeholder="your-secret-key" 
                    type="password"
                    className="glass-button"
                  />
                </div>
                <div>
                  <Label htmlFor="mongodb-url">MongoDB URL</Label>
                  <Input 
                    id="mongodb-url" 
                    placeholder="mongodb://localhost:27017/myapp"
                    className="glass-button"
                  />
                </div>
                <div>
                  <Label htmlFor="postgres-url">PostgreSQL URL</Label>
                  <Input 
                    id="postgres-url" 
                    placeholder="postgres://user:pass@localhost:5432/db"
                    className="glass-button"
                  />
                </div>
              </div>
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Generate .env File
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="glass-card interactive-card group">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Badge variant="outline">{resource.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}