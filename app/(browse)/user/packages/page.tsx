import Image from "next/image"

import { getTutor } from "@/actions/tutor/get-tutor"
import { getCurrentUser } from "@/actions/user/get-who-am-i"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import CreatePackage from "./create-package"

const UserPackagePage = async () => {
  const currentUser = await getCurrentUser()
  const tutorInfo = await getTutor(currentUser?.id)
  return (
    <div className="container">
      <div className="mb-6 flex items-center justify-between rounded-xl font-serif text-3xl">
        <div>My Packages</div>
        <CreatePackage />
      </div>
      <div className="flex gap-8 rounded-lg bg-white p-8 shadow-lg">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price per hour</TableHead>
              <TableHead className="text-center">Star Rating</TableHead>
              <TableHead>Total Reservations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tutorInfo.packages?.map((packageItem: any, index: number) => (
              <TableRow key={packageItem.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{packageItem.subject.name}</TableCell>
                <TableCell>{packageItem.subject.description}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2 font-semibold text-coin">
                    <Image
                      src="/icons/coin.png"
                      width={16}
                      height={16}
                      className="object-cover"
                      alt="coin"
                    />
                    {Number(packageItem.pricePerHour).toLocaleString()}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {isNaN(packageItem.starRating) ? 5 : packageItem.starRating}
                </TableCell>
                <TableCell className="text-center">
                  {packageItem.totalReservations}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UserPackagePage
