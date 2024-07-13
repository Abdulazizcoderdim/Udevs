import { toolsData, toolsLink } from '@/constants'
import MaxWidth from './MaxWidth'

const ToolsPage = () => {
  return (
    <div className="bg-[#f4f7ff] py-24" id="tools">
      <MaxWidth>
        <h1 className="text-64px max-[944px]:text-center max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">
          Tools
        </h1>
        <div className="flex items-center gap-7 mt-16">
          {toolsLink.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 cursor-pointer"
              >
                <span className="w-6 text-center h-6 cursor-pointer flex items-center justify-center rounded-full border-2 border-blue-1">
                  <span title="a" className="w-3 h-3 rounded-full bg-blue-1" />
                </span>
                <p className="font-semibold">{item.name}</p>
              </div>
            )
          })}
        </div>
        {/* content */}
        <div className="grid grid-cols-12 gap-3 mt-16">
          {toolsData.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: item.bg }}
                className="text-center flex-col gap-3 rounded-md flex items-center justify-center w-full h-[90px]"
              >
                <img width={25} height={25} src={item.icon} alt="" />
                <span className="text-[11px] text-[#000]">{item.title}</span>
              </div>
            )
          })}
        </div>
      </MaxWidth>
    </div>
  )
}

export default ToolsPage
