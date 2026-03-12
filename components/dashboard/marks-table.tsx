"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const marksData = [
  { subject: "Mathematics", marks: 92, total: 100, grade: "A+", status: "Excellent" },
  { subject: "Physics", marks: 85, total: 100, grade: "A", status: "Good" },
  { subject: "Chemistry", marks: 78, total: 100, grade: "B+", status: "Good" },
  { subject: "English", marks: 88, total: 100, grade: "A", status: "Excellent" },
  { subject: "Computer Science", marks: 95, total: 100, grade: "A+", status: "Excellent" },
  { subject: "Biology", marks: 72, total: 100, grade: "B", status: "Average" },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Excellent":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    case "Good":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    case "Average":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30"
    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30"
  }
}

export function MarksTable() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Student Marks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700 hover:bg-transparent">
                <TableHead className="text-slate-400">Subject</TableHead>
                <TableHead className="text-slate-400 text-center">Marks</TableHead>
                <TableHead className="text-slate-400 text-center">Grade</TableHead>
                <TableHead className="text-slate-400 text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marksData.map((item) => (
                <TableRow key={item.subject} className="border-slate-700 hover:bg-slate-700/50">
                  <TableCell className="font-medium text-white">{item.subject}</TableCell>
                  <TableCell className="text-center">
                    <span className="text-white">{item.marks}</span>
                    <span className="text-slate-500">/{item.total}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400 font-bold">
                      {item.grade}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
