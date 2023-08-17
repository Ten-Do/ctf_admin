'use client'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>{error.message.text || error.message}</h1>
      <h2>попробуй залогиниться заново</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      OR
      <Link href={'/'}>
        <button>Back Home</button>
      </Link>
      <hr />
      <h1>Страница нуждается в стилизации</h1>
    </div>
  )
}
