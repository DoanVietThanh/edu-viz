import Image from "next/image"
import { EllipsisVertical } from "lucide-react"

import { getPackages } from "@/actions/package/get-packages"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ManagePackages = async () => {
  const packages = await getPackages()

  if (!packages) return null
  console.log("🚀 ~ ManageSubjects ~ subjects:", packages)

  return (
    <div className="container p-4">
      <h1 className="w-max rounded-xl font-serif text-xl font-semibold">
        Manage Packages
      </h1>
      <Table className="mt-4 w-full bg-white p-4">
        <TableCaption>A list of packages.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Tutor Name</TableHead>
            <TableHead className="text-center">Price per hour</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Reservations</TableHead>
            <TableHead className="text-center">Rating</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages?.map((packageItem: any, index: number) => (
            <TableRow key={packageItem.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{packageItem.subject.name}</TableCell>
              <TableCell>{packageItem.tutor.fullName}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 text-coin">
                  <Image
                    src="/icons/coin.png"
                    width={16}
                    height={16}
                    className="object-cover"
                    alt="coin"
                  />
                  {packageItem.pricePerHour}
                </div>
              </TableCell>
              <TableCell
                className={`font-bold ${packageItem.status == "Active" ? "text-green-700" : "text-red-700"}`}
              >
                {packageItem.status}
              </TableCell>
              <TableCell className="text-center">
                {packageItem.totalReservations}
              </TableCell>
              <TableCell className="text-center font-bold">
                ⭐ {packageItem.averageFeedbacksValue || "__"}
              </TableCell>
              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ManagePackages
