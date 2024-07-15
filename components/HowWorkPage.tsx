import { howWeWork } from '@/constants'
import MaxWidth from './MaxWidth'

const HowWorkPage = () => {
  return (
    <MaxWidth id="how" className="py-24">
      <div>
        <h1 className="text-64px max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">
          How we work!
        </h1>
        <ul className="flex max-[944px]:flex-col text-center justify-between min-[944px]:items-center">
          {howWeWork.map((item, index) => (
            <li
              key={index}
              className="flex items-center flex-col gap-2 mt-16"
            >
              <img width={90} height={90} src={item.icon} alt="" />
              <div>
                <p className="text-lg font-bold max-[944px]: px-5 text-[#464359]">
                  {item.name}
                </p>
                <p className="text-base py-0 px-5 font-medium text-gray-500">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MaxWidth>
  )
}

export default HowWorkPage
