'use client'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const { message, status }: { message: string; status: number } = JSON.parse(error.message)

  return (
    <div>
      <h1>{message}</h1>
      <h2>{status}</h2>
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
        {' '}
        <button>Back Home</button>
      </Link>
      <hr />
      <h1>Страница нуждается в стилизации</h1>
    </div>

  )
}
