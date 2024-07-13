import HomePage from '@/components/HomePage'
import MessageModal from '@/components/MessageModal'
import OurServicesPage from '@/components/OurServicesPage'

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <OurServicesPage />
      </main>

      <MessageModal />
    </>
  )
}
