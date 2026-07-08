export const metadata = { title: 'My SaaS' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, fontFamily: 'Arial'}}>{children}</body>
    </html>
  )
}
