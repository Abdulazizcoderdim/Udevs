import DeleverPage from '@/components/DeleverPage'
import DevelopmentPage from '@/components/DevelopmentPage'
import ERPSystem from '@/components/ERPSystem'
import GoodZonePage from '@/components/GoodZonePage'
import HomePage from '@/components/HomePage'
import ITConsulting from '@/components/ITConsulting'
import MessageModal from '@/components/MessageModal'
import OptimizationPage from '@/components/OptimizationPage'
import OurClientsPage from '@/components/OurClientsPage'
import OurServicesPage from '@/components/OurServicesPage'
import SmsuzPage from '@/components/SmsuzPage'
import TeamPage from '@/components/TeamPage'
import ToolsPage from '@/components/ToolsPage'
import UxuiPage from '@/components/UxuiPage'

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <OurServicesPage />
        <TeamPage />
        <DevelopmentPage />
        <ERPSystem />
        <UxuiPage />
        <OptimizationPage />
        <ITConsulting />
        <ToolsPage />
        <OurClientsPage />
        <DeleverPage />
        <SmsuzPage/>
        <GoodZonePage/>
      </main>

      <MessageModal />
    </>
  )
}
