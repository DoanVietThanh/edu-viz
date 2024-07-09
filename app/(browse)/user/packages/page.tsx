import CreatePackage from './create-package'
import Image from 'next/image'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const UserPackagePage = () => {
  return (
    <div className='container'>
      <div className='flex justify-between items-center text-3xl font-serif rounded-xl mb-6'>
        <div>My Packages</div>
        <CreatePackage />
      </div>
      <div className='flex gap-8 bg-white p-8 rounded-lg shadow-lg'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>No</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className='text-center'>Image</TableHead>
              <TableHead className='text-center'>Video</TableHead>
              <TableHead className='text-right'>Price per hour</TableHead>
              <TableHead className='text-right'>Num of students</TableHead>
              <TableHead className='text-right'>Total Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>React JS</TableCell>
              <TableCell className='text-center'>_</TableCell>
              <TableCell className='text-center'>_</TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end items-center text-coin'>
                  <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
                  {Number(2500).toLocaleString()}
                </div>
              </TableCell>
              <TableCell className='text-right'>5</TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2 items-center text-coin font-semibold'>
                  <Image src='/icons/coin.png' width={16} height={16} className='object-cover' alt='coin' />
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
