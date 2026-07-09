export const metadata = {
  title: 'EvidLens - Kenya Decision Intelligence',
  description: 'Kenya\'s Decision Intelligence Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#F8FAFC' }}>
        {children}
      </body>
    </html>
  )
}
