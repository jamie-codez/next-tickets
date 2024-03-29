import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Nav from './{components}/Nav'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticketing App',
  description: 'Generated by Softech Technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Toaster position='bottom-center' />
          <Nav />
          <div className='flex-grow overflow-y-auto bg-page text-default-text px-5'>{children}</div>
        </div>
      </body>
    </html>
  )
}
