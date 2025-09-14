import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://marko-0925.github.io/portfolio/'),
  title: 'Marko Djurdjevic - Full-Stack Developer',
  description: 'Senior Full-Stack Developer with over 7 years of experience building client ideas into real world applications. Specializing in React, Node.js, and modern web technologies.',
  keywords: 'Full-Stack Developer, React, Node.js, Next.js, TypeScript, PostgreSQL, Redux',
  authors: [{ name: 'Marko Djurdjevic' }],
  openGraph: {
    title: 'Marko Djurdjevic - Full-Stack Developer',
    description: 'Senior Full-Stack Developer with over 7 years of experience building client ideas into real world applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
} 