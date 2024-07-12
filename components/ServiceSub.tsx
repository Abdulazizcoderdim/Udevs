import { serviceSub } from '@/constants'

const ServiceSub = () => {
  return (
    <div className="min-w-[300px] rounded-lg bg-white py-[18px] shadow-lg transition duration-200 ">
      <p className="px-6 mb-5 text-xs font-bold tracking-[1px] text-white/0.4">
        Service
      </p>
      <ul className="">
        {serviceSub.map((item, index) => (
          <li key={index} className="py-2 pr-[11px] pl-[34px] border cursor-pointer hover:bg-blue-600 hover:text-white w-full flex items-center transition-all duration-200 group">
            <span className="min-w-12 min-h-12 text-center flex items-center justify-center rounded-full mr-6 bg-blue-100 group-hover:bg-white">
              {item.icon}
            </span>
            Development of mobile applications
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceSub
