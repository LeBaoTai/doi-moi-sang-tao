import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IImageContent {
  name: string
  url: string
}

export default function ImageContent() {
  const contents: IImageContent[] = [
    {
      name: 'Nhà đầu tư',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556007794507-052RW1T151BM6WZX1W00/1-01.png?format=750w'
    },
    {
      name: 'Danh nghiệp KHCN',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556096897076-G6KELFTZBFAQOAOL2KB1/cxz-01.png?format=750w'
    },
    {
      name: 'Chuyên gia',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556094078029-YTPDLIGD1YZLPC59PJ8Y/8-01.png?format=750w'
    },
    {
      name: 'Cơ sở ươm tạo',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556091530900-TM04TVWZD6V026QSH5W6/7-01.png?format=750w'
    },
    {
      name: 'Startup',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1557392735312-6JYU45APXXO2M8IA444O/Untitled-3-01.png?format=750w'
    },
    {
      name: 'Công tin dịch vụ',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556094195067-PTA5DMR0O0UJ3SN3S10F/%C3%A1d-01.png?format=750w'
    },
    {
      name: 'Phòng thí nghiệm',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556078191835-UCKPFJ9CGA2Y7LI4D2WL/3-01.png?format=750w'
    },
    {
      name: 'Trường đại học',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556091105102-MFG35VE0K51GSLGMEA1A/6-01.png?format=750w'
    },
    {
      name: 'Chính sách',
      url: 'https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1556081192717-EK230Q0QQ2UASEL1MKVB/5-01.png?format=750w'
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-5 p-4 min-h-screen md:grid-cols-9 md:px-7 lg:grid-cols-12 lg:p-10 bg-content-bg">
      {contents.map(content => (
        <Link
          key={content.name}
          href="#"
          className="flex flex-col justify-evenly items-center rounded-md py-3 md:col-span-3 lg:col-span-4 hover:shadow-md transition duration-150 ease-out hover:ease-in">
          <Image
            src={content.url}
            width={200}
            height={200}
            alt={content.name}
          />
          <span className="text-sm font-bold">{content.name}</span>
        </Link>
      ))}
    </div>
  )
}
