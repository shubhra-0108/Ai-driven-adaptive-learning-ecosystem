"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const subjects = [
  { name: "Mathematics", progress: 92, color: "bg-emerald-500" },
  { name: "Physics", progress: 85, color: "bg-cyan-500" },
  { name: "Chemistry", progress: 78, color: "bg-amber-500" },
  { name: "English", progress: 88, color: "bg-violet-500" },
  { name: "Computer Science", progress: 95, color: "bg-pink-500" },
  { name: "Biology", progress: 72, color: "bg-orange-500" },
]

export function ProgressBars() {
  return (
    <Card className="bg-slate-800 border-slate-700 h-full">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
          Subject Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-sm font-medium">{subject.name}</span>
              <span className="text-white text-sm font-bold">{subject.progress}%</span>
            </div>
            <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${subject.color}`}
                style={{ width: `${subject.progress}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
