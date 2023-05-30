import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import '@/styles/page.css'
import NavBar from '@/components/Navbar2'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web.Comp Website',
  description: 'Made by Isaac Turner and Eric Xie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript"> window.scrollTo(0, 0); </script>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
