"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Passed", value: 5, color: "#10b981" },
  { name: "Failed", value: 1, color: "#ef4444" },
]

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { color: string } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 shadow-lg">
        <p className="text-white font-medium">{payload[0].name}</p>
        <p className="text-slate-300 text-sm">{payload[0].value} subjects</p>
      </div>
    )
  }
  return null
}

export function PerformancePieChart() {
  const totalSubjects = data.reduce((sum, item) => sum + item.value, 0)
  const successRate = Math.round((data[0].value / totalSubjects) * 100)

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Success Rate Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => <span className="text-slate-300">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">{successRate}%</p>
              <p className="text-slate-400 text-sm">Pass Rate</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
