"use client"

import { useState, useEffect } from "react"
import { AdminLogin } from "@/components/admin-login"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if admin is already logged in
    const adminAuth = localStorage.getItem("admin_auth")
    if (adminAuth === "authenticated") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true)
      localStorage.setItem("admin_auth", "authenticated")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("admin_auth")
  }

  return (
    <div className="min-h-screen bg-black">
      {!isAuthenticated ? <AdminLogin onLogin={handleLogin} /> : <AdminDashboard onLogout={handleLogout} />}
    </div>
  )
}
