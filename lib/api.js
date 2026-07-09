const API_URL = 'https://evidlens-48r6.onrender.com'

export async function fetchLanes() {
  const res = await fetch(`${API_URL}/lanes`)
  return res.json()
}

export async function askLens(question) {
  const res = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({question})
  })
  return res.json()
}
