export const metadata = { 
  title: 'EvidLens',
  description: "Kenya's Decision Intelligence Platform"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0, 
        background: '#F8FAFC', 
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {children}
      </body>
    </html>
  )
}
