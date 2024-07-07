import { Inter } from 'next/font/google'
import { SidebarProvider } from '/context/SidebarContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Explorers',
  description: 'Empowering underprivileged communities with AI and Machine Learning knowledge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}