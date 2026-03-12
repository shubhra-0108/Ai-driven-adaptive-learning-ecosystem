"use client"

import { X, LayoutDashboard, BookOpen, BarChart3, Calendar, Settings, HelpCircle, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Courses", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Calendar, label: "Schedule", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduDash</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-700 text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                    item.active
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl p-4 border border-emerald-500/20">
            <h4 className="text-white font-semibold mb-1">Need Help?</h4>
            <p className="text-slate-400 text-sm mb-3">Contact our support team for assistance</p>
            <button className="w-full py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-cyan-600 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
