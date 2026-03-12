"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Navbar } from "@/components/dashboard/navbar"
import { MarksTable } from "@/components/dashboard/marks-table"
import { PerformancePieChart } from "@/components/dashboard/performance-pie-chart"
import { SubjectBarChart } from "@/components/dashboard/subject-bar-chart"
import { ProgressBars } from "@/components/dashboard/progress-bars"
import { Roadmap } from "@/components/dashboard/roadmap"
import { StatsCards } from "@/components/dashboard/stats-cards"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser")
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(JSON.parse(currentUser))
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-64">
        <Navbar 
          user={user} 
          onMenuClick={() => setSidebarOpen(true)} 
          onLogout={handleLogout}
        />
        
        <main className="p-4 md:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Welcome back, {user?.name?.split(" ")[0]}!
            </h1>
            <p className="text-slate-400 mt-1">Here&apos;s your academic performance overview</p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PerformancePieChart />
            <SubjectBarChart />
          </div>

          {/* Progress and Marks Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <MarksTable />
            </div>
            <div>
              <ProgressBars />
            </div>
          </div>

          {/* Roadmap Section */}
          <Roadmap />
        </main>
      </div>
    </div>
  )
}
