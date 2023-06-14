import Image from 'next/image'
import * as headers from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <headers.default />
    </main>
  )
}
