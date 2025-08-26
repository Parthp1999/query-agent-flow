import { useEffect } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { APISection } from "@/components/api-section";
import { SecuritySection } from "@/components/security-section";
import { GettingStartedSection } from "@/components/getting-started-section";
import { Footer } from "@/components/footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update document title and meta
    document.title = "Agentic AI - Production-Ready Database Agent";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Production-ready AI Agent API that converts natural language into safe database operations. Multi-database support with enterprise-grade security.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Agentic AI Database Agent",
      "applicationCategory": "DeveloperApplication",
      "description": "AI-powered database agent that converts natural language queries into safe database operations",
      "operatingSystem": "Cross-platform",
      "softwareVersion": "1.0.0",
      "programmingLanguage": ["TypeScript", "JavaScript"],
      "author": {
        "@type": "Organization",
        "name": "Agentic AI Team"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Multi-database support (MongoDB, PostgreSQL, MySQL)",
        "Natural language query processing",
        "Enterprise-grade security",
        "Real-time WebSocket communication",
        "AI memory and learning",
        "Safety guardrails and validation"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Architecture Section */}
        <ArchitectureSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* API Reference Section */}
        <APISection />
        
        {/* Security Section */}
        <SecuritySection />
        
        {/* Getting Started Section */}
        <GettingStartedSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
