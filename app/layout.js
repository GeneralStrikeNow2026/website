import './globals.css'

export const metadata = {
  title: 'General Strike Now',
  description: 'When the government no longer serves the people, the people must withhold their labor.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
