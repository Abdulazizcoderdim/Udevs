import { erpSer } from '@/constants'
import MaxWidth from './MaxWidth'

const ERPSystem = () => {
  return (
    <div id="erp" className="bg-[#f4f7ff]">
      <MaxWidth className="py-24">
        <div>
          <h1 className="text-64px max-[944px]:text-[32px] font-extrabold text-blue-1">
            ERP system
          </h1>
          <div className="flex mt-10 max-[944px]:flex-col items-center max-[944px]:gap-16 gap-32 justify-between">
            <div
              className="w-1/2 max-[944px]:w-full h-[450px] rounded-lg flex justify-center items-center"
              style={{
                backgroundImage: `url('/bg-de.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <img width={500} height={500} src="/ERP.png" alt="" />
            </div>
            <div className="w-1/2 max-[944px]:w-full">
              <p className="text-2xl font-medium mb-12 text-[#18191f]">
                IT Systems of any level of complexity at a convenient time for
                you
              </p>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
                {erpSer.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[150px] bg-[#e0e8ff] py-[10px] pr-5 pl-[10px] rounded-lg"
                  >
                    <img src={item.icon} alt="" />
                    <p className="mt-3 text-lg text-[#000] font-semibold">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default ERPSystem
