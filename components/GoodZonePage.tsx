import { delever } from '@/constants'
import MaxWidth from './MaxWidth'

const GoodZonePage = () => {
  return (
    <MaxWidth id="goodzone" className="bg-white py-24">
      <div className="flex gap-10 max-[944px]:flex-col-reverse items-center justify-between">
        <div className="w-1/2 max-[944px]:w-full">
          <img src="/go1.png" alt="" />
        </div>
        <div className="flex w-1/2 max-[944px]:w-full flex-col gap-5">
          <img width={250} height={250} src="go.svg" alt="" />
          <div className="flex w-40 text-center text-sm font-medium text-[F50000] py-2 px-4 bg-[#FDCCCC] items-center gap-2 rounded-3xl">
            <img src="g1.svg" alt="" />
            <span className="text-base">E-Commerce</span>
          </div>
          <p className="text-xl leading-10 font-semibold text-[#464359]">
            Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <h1 className="text-3xl font-semibold">What we did?</h1>
          <ul className="flex flex-wrap gap-5">
            {delever.map((item, index) => (
              <li
                className="bg-[#f4f7ff] min-w-[160px] p-5 rounded-lg"
                key={index}
              >
                <img src={item.icon} alt="" />
                <p className="text-[#000] text-lg font-semibold mt-5">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MaxWidth>
  )
}

export default GoodZonePage
