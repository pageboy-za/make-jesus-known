import 'tailwindcss/tailwind.css'

import { Analytics } from '@vercel/analytics/react'
import { Baskervville } from 'next/font/google'
import localFont from 'next/font/local'

const BVille = Baskervville({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'Make Jesus Known ',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={BVille.className} lang="en">
      <head>
        <script
          data-no-cookie
          async
          src="https://cdn.splitbee.io/sb.js"
        ></script>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
