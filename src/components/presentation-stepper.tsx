import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  RotateCcw,
  Maximize2,
  Home,
  CheckCircle
} from "lucide-react"

interface Step {
  id: string
  title: string
  subtitle?: string
  badge?: string
  component: React.ComponentType
  duration?: number
}

interface PresentationStepperProps {
  steps: Step[]
  autoPlay?: boolean
  onClose?: () => void
}

export function PresentationStepper({ steps, autoPlay = false, onClose }: PresentationStepperProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const progress = ((currentStep + 1) / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsPlaying(false)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetPresentation = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
    setIsFullscreen(!isFullscreen)
  }

  // Auto-advance slides
  useState(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        nextStep()
      }, steps[currentStep]?.duration || 8000)
      return () => clearInterval(timer)
    }
  })

  const CurrentStepComponent = steps[currentStep]?.component

  return (
    <div className={`min-h-screen bg-gradient-hero relative ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4">
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="glass-button"
            >
              <Home className="h-4 w-4 mr-2" />
              Exit
            </Button>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>

          {/* Center Progress */}
          <div className="flex-1 max-w-md mx-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>{steps[currentStep]?.title}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetPresentation}
              className="glass-button"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="glass-button"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="glass-button"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          {/* Step Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                {currentStep + 1}
              </div>
              {steps[currentStep]?.badge && (
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  {steps[currentStep].badge}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {steps[currentStep]?.title}
            </h1>
            {steps[currentStep]?.subtitle && (
              <p className="text-xl text-muted-foreground">
                {steps[currentStep].subtitle}
              </p>
            )}
          </div>

          {/* Step Content */}
          <Card className="glass-card shadow-large max-w-6xl mx-auto">
            <CardContent className="p-8">
              {CurrentStepComponent && <CurrentStepComponent />}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          {/* Step Dots */}
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-primary scale-125'
                    : index < currentStep
                    ? 'bg-success'
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="glass-button"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button onClick={onClose} className="bg-gradient-primary hover:opacity-90">
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete
              </Button>
            ) : (
              <Button onClick={nextStep} className="bg-gradient-primary hover:opacity-90">
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-floating" style={{animationDelay: "2s"}}></div>
      </div>
    </div>
  )
}