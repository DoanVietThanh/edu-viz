import Image from "next/image"

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

const UserPackagePage = () => {
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
              <TableHead className="text-center">Image</TableHead>
              <TableHead className="text-center">Video</TableHead>
              <TableHead className="text-right">Price per hour</TableHead>
              <TableHead className="text-right">Num of students</TableHead>
              <TableHead className="text-right">Total Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>React JS</TableCell>
              <TableCell className="text-center">_</TableCell>
              <TableCell className="text-center">_</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end text-coin">
                  <Image
                    src="/icons/coin.png"
                    width={16}
                    height={16}
                    className="object-cover"
                    alt="coin"
                  />
                  {Number(2500).toLocaleString()}
                </div>
              </TableCell>
              <TableCell className="text-right">5</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2 font-semibold text-coin">
                  <Image
                    src="/icons/coin.png"
                    width={16}
                    height={16}
                    className="object-cover"
                    alt="coin"
                  />
                  {Number(2500 * 5).toLocaleString()}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UserPackagePage
