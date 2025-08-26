import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  FileText,
  Database,
  Server,
  Users
} from "lucide-react"

export function SecurityStep() {
  const securityFeatures = [
    {
      title: "SQL Injection Prevention",
      icon: Shield,
      color: "success",
      description: "Parameterized queries and input validation",
      status: "protected"
    },
    {
      title: "Query Guardrails",
      icon: AlertTriangle,
      color: "warning", 
      description: "Block destructive operations (DROP, TRUNCATE, ALTER)",
      status: "protected"
    },
    {
      title: "JWT Authentication",
      icon: Lock,
      color: "primary",
      description: "Secure token-based access control",
      status: "protected"
    },
    {
      title: "Data Privacy",
      icon: Eye,
      color: "secondary",
      description: "Automatic sensitive field exclusion",
      status: "protected"
    }
  ]

  const threats = [
    { threat: "SQL Injection", protection: "Parameterized Queries", status: "blocked" },
    { threat: "NoSQL Injection", protection: "Input Sanitization", status: "blocked" },
    { threat: "Data Exposure", protection: "Field Filtering", status: "blocked" },
    { threat: "Unauthorized Access", protection: "JWT Validation", status: "blocked" },
    { threat: "Destructive Operations", protection: "Query Guardrails", status: "blocked" },
    { threat: "Resource Exhaustion", protection: "Rate Limiting", status: "blocked" }
  ]

  const complianceStandards = [
    { standard: "GDPR", description: "Data protection regulation", status: "compliant" },
    { standard: "SOC 2", description: "Security controls", status: "compliant" },
    { standard: "HIPAA", description: "Healthcare data protection", status: "compliant" },
    { standard: "PCI DSS", description: "Payment security", status: "compliant" }
  ]

  const securityLayers = [
    {
      layer: "Authentication",
      icon: Users,
      description: "JWT tokens and user validation",
      features: ["Token validation", "User sessions", "Access control"]
    },
    {
      layer: "Application",
      icon: Server,
      description: "Input validation and rate limiting",
      features: ["Query validation", "Safety rules", "Rate limits"]
    },
    {
      layer: "Database",
      icon: Database,
      description: "Connection security and field filtering",
      features: ["Secure connections", "Field masking", "Query monitoring"]
    },
    {
      layer: "Audit",
      icon: FileText,
      description: "Comprehensive logging and monitoring",
      features: ["Activity logs", "Threat detection", "Compliance tracking"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-success/10 text-success border-success/20">
          Security & Safety
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Enterprise-Grade</span> Security
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Multi-layered security architecture with comprehensive safety guardrails and enterprise compliance
        </p>
      </div>

      {/* Security Features */}
      <div className="grid md:grid-cols-2 gap-6">
        {securityFeatures.map((feature, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${feature.color}/10`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <Badge className="bg-success/10 text-success border-success/20">
                    Protected
                  </Badge>
                </div>
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Threat Protection Matrix */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Threat Protection Matrix</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {threats.map((item, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <div>
                      <div className="font-medium">{item.threat}</div>
                      <div className="text-sm text-muted-foreground">{item.protection}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-destructive" />
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                      Blocked
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Architecture */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Security Layers</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {securityLayers.map((layer, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="pt-6">
                <layer.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{layer.layer}</h4>
                <p className="text-sm text-muted-foreground mb-4">{layer.description}</p>
                <div className="space-y-1">
                  {layer.features.map((feature, idx) => (
                    <div key={idx} className="text-xs bg-muted/30 rounded px-2 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Standards */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-6">Compliance Standards</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {complianceStandards.map((standard, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="text-lg font-bold">{standard.standard}</div>
                  <div className="text-sm text-muted-foreground">{standard.description}</div>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">
                  ✓ Compliant
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-success" />
              <span>Safety Measures</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Parameterized queries only
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Destructive operations blocked
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Query timeout protection
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Result size limiting
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-primary" />
              <span>Access Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                JWT token authentication
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                User-specific data isolation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Session management
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3" />
                Comprehensive audit logging
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Certification */}
      <div className="text-center p-6 rounded-xl bg-gradient-glass border border-success/20">
        <h3 className="text-lg font-semibold mb-3 text-success">🛡️ Security Certified</h3>
        <p className="text-muted-foreground mb-4">
          Our security measures are continuously tested and validated through automated testing and regular security audits
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <Badge className="bg-success/10 text-success border-success/20">Penetration Tested</Badge>
          <Badge className="bg-success/10 text-success border-success/20">Security Audited</Badge>
          <Badge className="bg-success/10 text-success border-success/20">Compliance Verified</Badge>
        </div>
      </div>
    </div>
  )
}