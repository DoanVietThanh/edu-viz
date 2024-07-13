import React from "react"
import Image from "next/image"

import { getAllUsers } from "@/actions/user/get-all-users"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ManageUsers = async () => {
  const allUsers = await getAllUsers()
  console.log("🚀 ~ ManageUsers ~ allUsers:", allUsers)
  function isValidUrl(url: string) {
    try {
      new URL(url)
      return true
    } catch (error) {
      return false
    }
  }
  return (
    <div className="container p-4">
      <h1 className="w-max rounded-xl font-serif text-xl">Manage Users</h1>
      <Table className="mt-4 w-full bg-white p-4">
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead className="text-center">Avatar</TableHead>
            <TableHead className="text-center">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers?.map((user: any, index: number) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell className="text-center">
                <Image
                  width={50}
                  height={50}
                  src={
                    isValidUrl(user.avatar)
                      ? user.avatar
                      : "/assets/avatar-tutor-3.png"
                  }
                  alt="avatar"
                  className="size-10 rounded-full"
                />
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 text-coin">
                  <Image
                    src="/icons/coin.png"
                    width={16}
                    height={16}
                    className="object-cover"
                    alt="coin"
                  />
                  {user.balance.toLocaleString()}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ManageUsers
