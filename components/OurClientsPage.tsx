import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo'
import { InfiniteMovingCardsDemo2 } from './InfiniteMovingCardsDemo2'
import MaxWidth from './MaxWidth'

const OurClientsPage = () => {
  return (
    <div id="clients" className="py-16">
      <MaxWidth>
        <h1 className="text-64px max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">
          Our Clients
        </h1>
      </MaxWidth>
      <InfiniteMovingCardsDemo />
      <InfiniteMovingCardsDemo2 />
    </div>
  )
}

export default OurClientsPage
