import Image from 'next/image'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

interface ILink {
  name: string
  url: string
}

export default function Header() {
  const links: ILink[] = [
    { name: 'H.OIP', url: '/H.IOP' },
    { name: 'Sáng Kiến', url: '/sangkien' },
    { name: 'Khởi Nghiệp', url: '/khoinghiep' },
    { name: 'Phổ Biến Kiến Thức', url: '/phobienkienthuc' },
    { name: 'Giải Thưởng I-Star', url: '/istar' }
  ]

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 shadow-sm md:grid-cols-9 md:h-16 md:px-7 lg:grid-cols-12 lg:px-10">
      <div className="md:col-span-3 shrink-0">
        <Image
          src={
            'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1581499554533-W5G4Z7UF9RA3PKZMZJN2/doimoisangtao_logo.png'
          }
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      <div className="hidden link lg:grid lg:grid-cols-5 gap-1 lg:col-span-7 items-center text-sm">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.url}
            className="col-span-1 border-red-600 p-1 h-8 flex justify-center transition duration-300 ease-out hover:ease-in hover:border-b-2">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block md:col-span-3 lg:col-span-2">
        <Input placeholder="Tìm kiếm..." />
      </div>
      <div className="w-full flex items-center justify-end md:col-span-3 lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <svg
              className="w-5 shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button className="bg-slate-200 font-bold text-black hover:text-white">
                Submit
              </Button>
              <DrawerClose>
                <Button variant="outline" className="shadow-sm">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
