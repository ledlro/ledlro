import Link from 'next/link'

export default function About() {
  return (
    <div style={{padding:'2rem', fontFamily:'Arial, sans-serif', color:'#111'}}>
      <h1>About LEDLRO.io</h1>
      <p>We create minimal, dynamic, modern web solutions with black & white design aesthetics.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}

