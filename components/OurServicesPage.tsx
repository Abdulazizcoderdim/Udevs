import { servicesData } from '@/constants'
import MaxWidth from './MaxWidth'

const OurServicesPage = () => {
  return (
    <MaxWidth className="py-24">
      <div className="">
        <h1 className="text-64px max-[944px]:text-center max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">Our Services</h1>
        <div className="grid grid-cols-3 max-[944px]:grid-cols-2 gap-7 mt-16">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="p-8 flex flex-col gap-8 bg-[#F4F7FF] rounded-lg"
            >
              <p className="text-blue-600 text-4xl">
                {<item.icon width={30} height={30} />}
              </p>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  )
}

export default OurServicesPage
