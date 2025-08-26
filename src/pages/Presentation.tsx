import { useNavigate } from "react-router-dom"
import { PresentationStepper } from "@/components/presentation-stepper"
import { OverviewStep } from "@/components/presentation-steps/overview-step"
import { FeaturesStep } from "@/components/presentation-steps/features-step"
import { ArchitectureStep } from "@/components/presentation-steps/architecture-step"
import { HowItWorksStep } from "@/components/presentation-steps/how-it-works-step"
import { APIStep } from "@/components/presentation-steps/api-step"
import { SecurityStep } from "@/components/presentation-steps/security-step"
import { GettingStartedStep } from "@/components/presentation-steps/getting-started-step"
import { ConclusionStep } from "@/components/presentation-steps/conclusion-step"

const Presentation = () => {
  const navigate = useNavigate()

  const presentationSteps = [
    {
      id: 'overview',
      title: 'Agentic AI Overview',
      subtitle: 'Production-Ready Database Agent',
      badge: 'Introduction',
      component: OverviewStep,
      duration: 8000
    },
    {
      id: 'features',
      title: 'Core Features',
      subtitle: 'Enterprise-Grade Functionality',
      badge: 'Features',
      component: FeaturesStep,
      duration: 10000
    },
    {
      id: 'architecture',
      title: 'System Architecture',
      subtitle: 'Built for Scale',
      badge: 'Architecture',
      component: ArchitectureStep,
      duration: 10000
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      subtitle: 'Step-by-Step Workflow',
      badge: 'Process',
      component: HowItWorksStep,
      duration: 12000
    },
    {
      id: 'api',
      title: 'API Reference',
      subtitle: 'Complete Documentation',
      badge: 'API',
      component: APIStep,
      duration: 10000
    },
    {
      id: 'security',
      title: 'Security & Safety',
      subtitle: 'Enterprise-Grade Protection',
      badge: 'Security',
      component: SecurityStep,
      duration: 10000
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      subtitle: 'Quick Setup Guide',
      badge: 'Setup',
      component: GettingStartedStep,
      duration: 8000
    },
    {
      id: 'conclusion',
      title: 'Get Started Today',
      subtitle: 'Transform Your Database Experience',
      badge: 'Conclusion',
      component: ConclusionStep,
      duration: 8000
    }
  ]

  const handleClose = () => {
    navigate('/')
  }

  return (
    <PresentationStepper 
      steps={presentationSteps}
      autoPlay={false}
      onClose={handleClose}
    />
  )
}

export default Presentation