import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Database,
  Server,
  Users,
  FileText,
  Clock,
  Zap
} from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      title: "SQL Injection Prevention",
      icon: Shield,
      color: "success",
      description: "Parameterized queries and input validation prevent SQL injection attacks",
      details: [
        "Parameterized query execution only",
        "Input sanitization and validation",
        "Query structure analysis",
        "Dangerous pattern detection"
      ]
    },
    {
      title: "Query Guardrails",
      icon: AlertTriangle,
      color: "warning", 
      description: "Built-in safety rules prevent destructive database operations",
      details: [
        "Block DROP/TRUNCATE/ALTER operations",
        "Require WHERE clauses on UPDATE/DELETE",
        "Single statement execution only",
        "Comment removal and validation"
      ]
    },
    {
      title: "Authentication & Authorization",
      icon: Lock,
      color: "primary",
      description: "JWT-based authentication with user-specific access control",
      details: [
        "JWT token validation",
        "User session management", 
        "Role-based access control",
        "Automatic token expiration"
      ]
    },
    {
      title: "Data Privacy",
      icon: Eye,
      color: "secondary",
      description: "Sensitive data protection and field-level security",
      details: [
        "Password field exclusion",
        "PII data masking",
        "Configurable field filtering",
        "Response data sanitization"
      ]
    },
    {
      title: "Audit Logging",
      icon: FileText,
      color: "accent",
      description: "Comprehensive logging for security monitoring and compliance",
      details: [
        "All query operations logged",
        "User activity tracking",
        "Failed attempt monitoring",
        "Compliance-ready audit trail"
      ]
    },
    {
      title: "Rate Limiting & Timeouts",
      icon: Clock,
      color: "destructive",
      description: "Prevent abuse and ensure system stability",
      details: [
        "Query execution timeouts",
        "Connection rate limiting",
        "Resource usage monitoring",
        "Automatic cleanup processes"
      ]
    }
  ]

  const threatProtections = [
    {
      threat: "SQL Injection",
      protection: "Parameterized Queries",
      status: "protected",
      description: "All queries use parameterized execution with input validation"
    },
    {
      threat: "NoSQL Injection", 
      protection: "Input Sanitization",
      status: "protected",
      description: "MongoDB queries sanitized to prevent $where and $function attacks"
    },
    {
      threat: "Data Exposure",
      protection: "Field Filtering",
      status: "protected", 
      description: "Sensitive fields automatically excluded from all responses"
    },
    {
      threat: "Unauthorized Access",
      protection: "JWT Authentication",
      status: "protected",
      description: "All endpoints require valid JWT tokens for access"
    },
    {
      threat: "Destructive Operations",
      protection: "Query Guardrails", 
      status: "protected",
      description: "DROP, TRUNCATE, and ALTER operations blocked by default"
    },
    {
      threat: "Resource Exhaustion",
      protection: "Limits & Timeouts",
      status: "protected",
      description: "Query timeouts and result limits prevent resource abuse"
    },
    {
      threat: "Data Exfiltration",
      protection: "Result Limiting",
      status: "protected",
      description: "Default row limits and pagination prevent bulk data export"
    },
    {
      threat: "Privilege Escalation",
      protection: "User Isolation",
      status: "protected",
      description: "User-specific data isolation and access control"
    }
  ]

  const complianceStandards = [
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      features: ["Data minimization", "Right to deletion", "Audit logging", "Consent management"]
    },
    {
      standard: "SOC 2",
      description: "System and Organization Controls compliance", 
      features: ["Access controls", "System monitoring", "Data encryption", "Incident response"]
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      features: ["Data encryption", "Access logs", "User authentication", "Data integrity"]
    },
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      features: ["Secure transmission", "Access control", "Regular monitoring", "Strong cryptography"]
    }
  ]

  const securityBestPractices = [
    "Use environment variables for sensitive configuration",
    "Implement proper JWT token rotation",
    "Enable audit logging in production",
    "Set appropriate query timeouts",
    "Use connection pooling for database access",
    "Implement rate limiting for API endpoints",
    "Regularly update dependencies",
    "Monitor for suspicious query patterns",
    "Use HTTPS in production environments",
    "Implement proper error handling without information leakage"
  ]

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            <Shield className="h-3 w-3 mr-2" />
            Security & Safety
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Enterprise-Grade</span>
            <br />
            Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with security-first principles, our AI agent includes comprehensive safety 
            guardrails and enterprise-grade security features.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="glass-card interactive-card group">
              <CardHeader>
                <div className={`p-3 rounded-xl bg-${feature.color}/10 w-fit mb-4`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Threat Protection Matrix */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Threat Protection Matrix</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {threatProtections.map((item, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      <h4 className="font-semibold">{item.threat}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <Badge className="bg-success/10 text-success border-success/20">
                        Protected
                      </Badge>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-primary">Protection: </span>
                    <span className="text-sm">{item.protection}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Architecture */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Security Architecture</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Authentication Layer</h4>
                <p className="text-sm text-muted-foreground">JWT tokens, user validation, session management</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <Server className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Application Layer</h4>
                <p className="text-sm text-muted-foreground">Input validation, query guardrails, rate limiting</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <Database className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Database Layer</h4>
                <p className="text-sm text-muted-foreground">Connection pooling, query sanitization, field filtering</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-success mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Audit Layer</h4>
                <p className="text-sm text-muted-foreground">Comprehensive logging, monitoring, compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Compliance Standards</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{standard.standard}</CardTitle>
                    <Badge className="bg-success/10 text-success border-success/20">
                      Compliant
                    </Badge>
                  </div>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {standard.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Security Best Practices</h3>
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {securityBestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Testing */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Security Testing</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security measures are continuously tested and validated through automated 
            testing and regular security audits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="glass-button">
              <Shield className="h-4 w-4 mr-2" />
              Security Report
            </Button>
            <Button variant="outline" className="glass-button">
              <FileText className="h-4 w-4 mr-2" />
              Compliance Docs
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Zap className="h-4 w-4 mr-2" />
              Run Security Scan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}