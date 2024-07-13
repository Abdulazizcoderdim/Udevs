import DevelopmentPage from '@/components/DevelopmentPage'
import ERPSystem from '@/components/ERPSystem'
import HomePage from '@/components/HomePage'
import MessageModal from '@/components/MessageModal'
import OurServicesPage from '@/components/OurServicesPage'
import TeamPage from '@/components/TeamPage'

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <OurServicesPage />
        <TeamPage />
        <DevelopmentPage />
        <ERPSystem />
      </main>

      <MessageModal />
    </>
  )
}
