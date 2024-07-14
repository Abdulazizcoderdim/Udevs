'use client'

import { toolsData, toolsLink } from '@/constants'
import { useState } from 'react'
import MaxWidth from './MaxWidth'

const ToolsPage = () => {
  const [tool, setTool] = useState('')
  const [toolPr, setToolPr] = useState(false)

  return (
    <div className="bg-[#f4f7ff] py-24" id="tools">
      <MaxWidth>
        <h1 className="text-64px max-[944px]:text-center max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">
          Tools
        </h1>
        <div className="max-[944px]:grid max-[944px]:grid-cols-2 flex items-center gap-7 mt-16">
          {toolsLink.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setTool(item.name),
                    setToolPr((prev) => {
                      const newState = !prev
                      if (!newState) {
                        setTool('')
                      }
                      return newState
                    })
                }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <span className="w-6 text-center h-6 cursor-pointer flex items-center justify-center rounded-full border-2 border-blue-1">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      tool === item.name && 'bg-blue-1'
                    }`}
                  />
                </span>
                <p className="font-semibold">{item.name}</p>
              </div>
            )
          })}
        </div>
        {/* content */}
        <div className="grid grid-cols-12 max-[944px]:grid-cols-5 gap-3 mt-16">
          {toolsData.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: tool == item.tip ? item.bg : tool == '' ? item.bg : ''  }}
                className="text-center  transition-all duration-300 flex-col max-[944px]:pt-1 gap-3 rounded-md flex items-center justify-center w-full max-[944px]:h-[54px] h-[90px]"
              >
                <img
                  className="max-[944px]:w-5 max-[944px]:h-5 w-[25px] h-[25px]"
                  src={item.icon}
                  alt=""
                />
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
