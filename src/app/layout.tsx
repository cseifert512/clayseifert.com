import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clay Seifert — Builder at the Intersection',
  description: 'Exploring the synthesis of robotics, living systems, advanced manufacturing, and computational design.',
  keywords: ['robotics', 'living systems', 'advanced manufacturing', 'computational design', 'distributed production'],
  authors: [{ name: 'Clay Seifert' }],
  openGraph: {
    title: 'Clay Seifert — Builder at the Intersection',
    description: 'Exploring the synthesis of robotics, living systems, advanced manufacturing, and computational design.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clay Seifert',
    description: 'Building at the intersection of robotics, living systems, and advanced manufacturing.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg font-body antialiased">
        {children}
      </body>
    </html>
  )
}
