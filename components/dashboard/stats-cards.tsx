"use client"

import { TrendingUp, Award, BookOpen, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Overall Grade",
    value: "A",
    subtitle: "Top 10% of class",
    icon: Award,
    trend: "+5%",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Average Score",
    value: "85%",
    subtitle: "Across all subjects",
    icon: TrendingUp,
    trend: "+12%",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Subjects",
    value: "6",
    subtitle: "Currently enrolled",
    icon: BookOpen,
    trend: "Active",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Goals Met",
    value: "4/5",
    subtitle: "This semester",
    icon: Target,
    trend: "80%",
    color: "from-pink-500 to-rose-500",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-slate-800 border-slate-700 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
                <p className="text-slate-500 text-sm mt-1">{stat.subtitle}</p>
              </div>
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-medium">{stat.trend}</span>
              <span className="text-slate-500 text-sm">from last term</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
