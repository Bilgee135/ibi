import Headertwo from './components/Headertwo'
import Productlist from './components/productlist'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headertwo />
      <Productlist />
    </main>
  )
}
