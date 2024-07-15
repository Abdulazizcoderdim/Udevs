import { portfolioSub } from '@/constants'
import Link from 'next/link'

const PortfolioSub = () => {
  return (
    <div className="min-w-[300px] rounded-lg bg-white py-[18px] shadow-lg transition duration-200 ">
      <p className="px-6 mb-5 text-xs font-bold tracking-[1px] text-white/0.4">
        Service
      </p>
      <ul className="">
        {portfolioSub.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className="py-2 pr-[11px] pl-[34px] cursor-pointer hover:bg-blue-600 hover:text-white w-full flex items-center transition-all duration-200 group">
              <span
                style={{ backgroundColor: item.bg, color: item.text }}
                className={`min-w-12 min-h-12 font-semibold text-blue-600 text-center flex items-center justify-center rounded-full mr-6 group-hover:bg-white`}
              >
                {item.icon}
              </span>
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default PortfolioSub
