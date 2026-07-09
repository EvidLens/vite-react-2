export async function askLens(question) {
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer PASTE_YOUR_GROQ_KEY_HERE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: `You are Lens AI for EvidLens. Answer about Kenya: ${question}` }],
        max_tokens: 300
      })
    })
    const data = await res.json()
    return { answer: data.choices[0].message.content }
  } catch {
    return { answer: 'Lens AI is offline. Try again.' }
  }
}
