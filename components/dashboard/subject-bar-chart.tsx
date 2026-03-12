"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
  { subject: "Math", marks: 92, color: "#10b981" },
  { subject: "Physics", marks: 85, color: "#06b6d4" },
  { subject: "Chemistry", marks: 78, color: "#f59e0b" },
  { subject: "English", marks: 88, color: "#8b5cf6" },
  { subject: "CS", marks: 95, color: "#ec4899" },
  { subject: "Biology", marks: 72, color: "#f97316" },
]

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 shadow-lg">
        <p className="text-white font-medium">{label}</p>
        <p className="text-slate-300 text-sm">{payload[0].value} marks</p>
      </div>
    )
  }
  return null
}

export function SubjectBarChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
          Subject-wise Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="subject" 
                tick={{ fill: "#94a3b8" }}
                axisLine={{ stroke: "#475569" }}
              />
              <YAxis 
                tick={{ fill: "#94a3b8" }}
                axisLine={{ stroke: "#475569" }}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(148, 163, 184, 0.1)" }} />
              <Bar dataKey="marks" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
