"use client"

import Link from "next/link"
import {
  FileText,
  Upload,
  TrendingUp,
  Users,
  ArrowUpRight,
  Download,
  Eye,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TopBar } from "@/components/layout/top-bar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { GetReceipt } from "@/services/getReceipt"
import { useEffect } from "react"
import { useGetReceipt } from "@/hooks/getReceipt"

const stats = [
  {
    name: "Total Receipts",
    value: "1,247",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    name: "This Month",
    value: "84",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: Calendar,
  },
  {
    name: "Employees",
    value: "156",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    name: "Storage Used",
    value: "2.4 GB",
    change: "+0.8%",
    changeType: "neutral" as const,
    icon: TrendingUp,
  },
]

const recentReceipts = [
  {
    id: "1",
    employeeName: "Sarah Johnson",
    fileName: "salary_march_2024.pdf",
    date: "Mar 15, 2024",
    status: "processed",
  },
  {
    id: "2",
    employeeName: "Michael Chen",
    fileName: "salary_march_2024.pdf",
    date: "Mar 15, 2024",
    status: "processed",
  },
  {
    id: "3",
    employeeName: "Emily Davis",
    fileName: "salary_march_2024.pdf",
    date: "Mar 14, 2024",
    status: "pending",
  },
  {
    id: "4",
    employeeName: "Robert Wilson",
    fileName: "salary_march_2024.pdf",
    date: "Mar 14, 2024",
    status: "processed",
  },
  {
    id: "5",
    employeeName: "Lisa Anderson",
    fileName: "salary_march_2024.pdf",
    date: "Mar 13, 2024",
    status: "processed",
  },
]

const quickActions = [
  {
    name: "Upload Receipt",
    description: "Add new salary receipt",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "View All Receipts",
    description: "Browse all documents",
    href: "/receipts",
    icon: FileText,
  },
  {
    name: "Download Report",
    description: "Export monthly report",
    href: "#",
    icon: Download,
  },
]



export default function DashboardPage () {



  const {isLoading, data, error} = useGetReceipt()

  console.log('data', data)

  return (
    <div className="flex flex-col">
      <TopBar
        title="Dashboard"
        description="Overview of your payroll receipts"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${
                    stat.changeType === "positive"
                      ? "text-success"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.name} href={action.href}>
              <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <action.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{action.name}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Receipts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Receipts</CardTitle>
              <CardDescription>Latest uploaded salary receipts</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/receipts">
                View all
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? 
            (
              <p>Cargando...</p>
            ): 
            (
              <div className="space-y-4">
              {data && Object.values(data).map((receipt:any) => (
                <div
                  key={receipt.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {receipt.empleado
                          }
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{receipt.empleado}</p>
                      <p className="text-sm text-muted-foreground">
                        {receipt.legajo}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-muted-foreground">
                        {receipt.fecha}
                      </p>
                      <Badge
                        variant={
                          receipt.categoria === "Standard"
                            ? "default"
                            : "secondary"
                        }
                        className="mt-1"
                      >
                        {receipt.categoria}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/receipts/${receipt.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View receipt</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )
            }
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
