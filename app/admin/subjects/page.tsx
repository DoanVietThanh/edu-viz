import { EllipsisVertical } from "lucide-react"

import { getSubjects } from "@/actions/subject/get-subjects"
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

const ManageSubjects = async () => {
  const subjects = await getSubjects()

  if (!subjects) return null

  return (
    <div className="container p-4">
      <h1 className="w-max rounded-xl font-serif text-xl font-semibold">
        Manage Subjects
      </h1>
      <Table className="mt-4 w-full bg-white p-4">
        <TableCaption>A list of subjects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            {/* <TableHead className="text-center">Action</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects?.map((subject: any, index: number) => (
            <TableRow key={subject.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{subject.name}</TableCell>
              <TableCell className="line-clamp-none w-[30vw] text-ellipsis">
                {subject.description || "_"}
              </TableCell>
              {/* <TableCell className="text-center">
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
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ManageSubjects
