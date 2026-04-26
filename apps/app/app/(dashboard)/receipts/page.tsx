"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Calendar,
  X,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TopBar } from "@/components/layout/top-bar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useGetReceipt } from "@/hooks/getReceipt"

interface receiptsDataInterface{
  id: string,
  empleado: string,
  legajo: string,
  fecha: string,
  antiguedad: string,
  puesto: string,
  categoria: string,
}


const categoriaTypes = {
  Standard: "bg-blue-400",
  Convenio: "bg-gray-400",
}

const receiptsData = [
  {
    id: "1",
    employeeName: "Sarah Johnson",
    employeeId: "EMP-001",
    fileName: "salary_march_2024.pdf",
    date: "2024-03-15",
    description: "March 2024 Salary",
    status: "processed",
    fileSize: "124 KB",
  },
  {
    id: "2",
    employeeName: "Michael Chen",
    employeeId: "EMP-002",
    fileName: "salary_march_2024.pdf",
    date: "2024-03-15",
    description: "March 2024 Salary",
    status: "processed",
    fileSize: "118 KB",
  },
  {
    id: "3",
    employeeName: "Emily Davis",
    employeeId: "EMP-003",
    fileName: "salary_march_2024.pdf",
    date: "2024-03-14",
    description: "March 2024 Salary",
    status: "pending",
    fileSize: "132 KB",
  },
  {
    id: "4",
    employeeName: "Robert Wilson",
    employeeId: "EMP-004",
    fileName: "salary_march_2024.pdf",
    date: "2024-03-14",
    description: "March 2024 Salary",
    status: "processed",
    fileSize: "121 KB",
  },
  {
    id: "5",
    employeeName: "Lisa Anderson",
    employeeId: "EMP-005",
    fileName: "salary_march_2024.pdf",
    date: "2024-03-13",
    description: "March 2024 Salary",
    status: "processed",
    fileSize: "115 KB",
  },
  {
    id: "6",
    employeeName: "David Martinez",
    employeeId: "EMP-006",
    fileName: "salary_feb_2024.pdf",
    date: "2024-02-15",
    description: "February 2024 Salary",
    status: "processed",
    fileSize: "128 KB",
  },
  {
    id: "7",
    employeeName: "Jennifer Taylor",
    employeeId: "EMP-007",
    fileName: "salary_feb_2024.pdf",
    date: "2024-02-15",
    description: "February 2024 Salary",
    status: "processed",
    fileSize: "119 KB",
  },
  {
    id: "8",
    employeeName: "James Brown",
    employeeId: "EMP-008",
    fileName: "salary_feb_2024.pdf",
    date: "2024-02-14",
    description: "February 2024 Salary",
    status: "error",
    fileSize: "0 KB",
  },
]

export default function ReceiptsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [dateFilter, setDateFilter] = useState<string>("all")
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [receiptToDelete, setReceiptToDelete] = useState<string | null>(null)


  const {isPending, data, error} = useGetReceipt();


  console.log('data', data)

  const filteredReceipts = data.filter((receipt: receiptsDataInterface) => {
    const matchesSearch =
      receipt.empleado.toLowerCase().includes(searchQuery.toLowerCase()) ||
      //receipt.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.fecha.toLowerCase().includes(searchQuery.toLowerCase())

    /*const matchesStatus =
      statusFilter === "all" || receipt.status === statusFilter*/

    return matchesSearch
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedReceipts(filteredReceipts.map((r) => r.id))
    } else {
      setSelectedReceipts([])
    }
  }

  const handleSelectReceipt = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedReceipts([...selectedReceipts, id])
    } else {
      setSelectedReceipts(selectedReceipts.filter((r) => r !== id))
    }
  }

  const handleDeleteClick = (id: string) => {
    setReceiptToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    // Handle delete logic here
    setDeleteDialogOpen(false)
    setReceiptToDelete(null)
  }

  const activeFilters = [
    statusFilter !== "all" && { key: "status", value: statusFilter },
    dateFilter !== "all" && { key: "date", value: dateFilter },
  ].filter(Boolean)

  return (
    <div className="flex flex-col">
      <TopBar
        title="Receipts"
        description="Manage and view all salary receipts"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, file, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="processed">Processed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="default">
                      <Calendar className="mr-2 h-4 w-4" />
                      Date Range
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="end">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>From</Label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label>To</Label>
                        <Input type="date" />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Clear
                        </Button>
                        <Button size="sm">Apply</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button variant="outline" asChild>
                  <Link href="/upload">Upload New</Link>
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">
                  Active filters:
                </span>
                {statusFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Status: {statusFilter}
                    <button
                      onClick={() => setStatusFilter("all")}
                      className="ml-1 rounded-full hover:bg-muted"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setStatusFilter("all")
                    setDateFilter("all")
                    setSearchQuery("")
                  }}
                >
                  Clear all
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Selected Actions */}
        {selectedReceipts.length > 0 && (
          <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-4">
            <span className="text-sm">
              {selectedReceipts.length} receipt(s) selected
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Selected
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Selected
              </Button>
            </div>
          </div>
        )}

        {/* Table */}
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base font-medium">
              Total de documentos: {filteredReceipts.length} 
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 pl-6">
                    <Checkbox
                      checked={
                        selectedReceipts.length === filteredReceipts.length &&
                        filteredReceipts.length > 0
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Empleado</TableHead>
                  <TableHead>Archivo</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Convenio</TableHead>
                  <TableHead className="text-right pr-6">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReceipts.map((receipt: receiptsDataInterface) => (
                  <TableRow key={receipt.id}>
                    <TableCell className="pl-6">
                      <Checkbox
                        checked={selectedReceipts.includes(receipt.id)}
                        onCheckedChange={(checked) =>
                          handleSelectReceipt(receipt.id, checked === true)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{receipt.empleado}</p>
                        <p className="text-sm text-muted-foreground">
                          {receipt.legajo}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm">{receipt.legajo}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(receipt.fecha).toLocaleDateString("en-US", {
                        timeZone: "UTC",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`gap-1 text-white  ${categoriaTypes[receipt.categoria] || ""}`}>
                        {receipt.categoria}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Acciones</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/receipts/${receipt.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver Detalles
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Descargar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDeleteClick(receipt.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-{filteredReceipts.length} of {filteredReceipts.length}{" "}
            results
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Receipt</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this receipt? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
