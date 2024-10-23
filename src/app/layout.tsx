import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  // variable: '--font-roboto',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang thông tin đổi mới sáng tạo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}