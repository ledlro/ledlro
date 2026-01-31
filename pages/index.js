import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>LEDLRO.io</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>LEDLRO.io</h1>
        <p>Your brand for modern, minimal, dynamic web experiences.</p>
        <Link href="/about" className={styles.btn}>Learn More</Link>
      </main>

      <footer className={styles.footer}>
        Designed & Developed by LEDLRO.io
      </footer>
    </div>
  )
}

