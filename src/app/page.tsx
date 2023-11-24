import Footer from '@/components/Footer'
import LeftColumn from '@/components/LeftColumn'
import RightColumn from '@/components/RightColumn'

export default function Home() {
  return (
    <>
      <main className='flex flex-wrap'>
        <LeftColumn />
        <RightColumn />
      </main>
      <Footer />
    </>
  )
}
