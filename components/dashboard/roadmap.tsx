"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, ArrowRight, Lightbulb, Target, BookOpen, Trophy } from "lucide-react"

const roadmapSteps = [
  {
    title: "Focus on Biology",
    description: "Your biology score is the lowest. Consider dedicating extra study time and seeking help from teachers.",
    status: "current",
    icon: Target,
    tips: ["Review cellular biology concepts", "Practice diagram labeling", "Join study groups"],
  },
  {
    title: "Maintain Math Excellence",
    description: "Your mathematics performance is excellent! Keep up the good work and help peers who struggle.",
    status: "completed",
    icon: Trophy,
    tips: ["Continue practicing problems", "Explore advanced topics", "Consider tutoring others"],
  },
  {
    title: "Chemistry Improvement",
    description: "Chemistry needs attention. Focus on balancing equations and understanding reactions.",
    status: "upcoming",
    icon: BookOpen,
    tips: ["Practice chemical equations", "Watch video tutorials", "Create flashcards for formulas"],
  },
  {
    title: "Computer Science Mastery",
    description: "Your CS skills are outstanding! Consider participating in coding competitions.",
    status: "completed",
    icon: Lightbulb,
    tips: ["Build personal projects", "Learn new programming languages", "Contribute to open source"],
  },
]

function getStatusStyles(status: string) {
  switch (status) {
    case "completed":
      return {
        icon: "bg-emerald-500 text-white",
        line: "bg-emerald-500",
        card: "border-emerald-500/30 bg-emerald-500/5",
      }
    case "current":
      return {
        icon: "bg-cyan-500 text-white animate-pulse",
        line: "bg-slate-600",
        card: "border-cyan-500/30 bg-cyan-500/5",
      }
    default:
      return {
        icon: "bg-slate-700 text-slate-400",
        line: "bg-slate-600",
        card: "border-slate-700 bg-slate-800",
      }
  }
}

export function Roadmap() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
          Improvement Roadmap & Guidance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {roadmapSteps.map((step, index) => {
            const styles = getStatusStyles(step.status)
            return (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index < roadmapSteps.length - 1 && (
                  <div className={`absolute left-5 top-12 w-0.5 h-full ${styles.line}`} />
                )}

                <div className="flex gap-4">
                  {/* Status Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : step.status === "current" ? (
                      <step.icon className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 p-4 rounded-xl border ${styles.card}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          {step.title}
                          {step.status === "current" && (
                            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">
                              In Progress
                            </span>
                          )}
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="mt-4 space-y-2">
                      <p className="text-slate-500 text-xs uppercase tracking-wide font-medium">Action Items:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip) => (
                          <li key={tip} className="flex items-center gap-2 text-sm text-slate-300">
                            <ArrowRight className="w-3 h-3 text-emerald-500" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
