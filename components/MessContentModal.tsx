'use client'

import { Link, X, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

type MessContentModalProps = {
  setOpenMess: React.Dispatch<React.SetStateAction<boolean>>
}

const MessContentModal = ({ setOpenMess }: MessContentModalProps) => {
  const [message, setMessage] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    updateClock()
  }, [])

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="py-5 border-b-[1px]">
        <div className="px-3 flex justify-between">
          <div className="flex items-center gap-4">
            <img width={42} height={42} src="/modalLogo.png" alt="" />
            <div>
              <p>Udevs</p>
              <p className="flex text-sm items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                Welcome
              </p>
            </div>
          </div>
          <X
            onClick={() => setOpenMess(false)}
            className="cursor-pointer text-gray-300"
          />
        </div>
      </div>
      {/* <input type="color" /> */}
      {/* content */}
      <div className="bg-[#F9F9F9] flex-1">
        <div className="pt-3 p-2">
          <div className="p-3 border bg-[#E8E8E8] rounded-lg">
            <p className="font-bold">
              Udevs{' '}
              <span className="text-sm font-medium text-gray-400">
                12 июл. {time}
              </span>
            </p>
            <p>How can we help you )?</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="border-t-[1px] px-4 py-3">
        <div className="flex flex-col">
          <form className="flex justify-between items-center">
            <input
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none flex-1"
              type="text"
              value={message}
              placeholder="Введите сообщение…"
            />
            {message.length > 0 && (
              <button
                onClick={() => setMessage('')}
                title="Отправить"
                type="button"
              >
                <img
                  src="/send.png"
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            )}
          </form>
          <div className="border-t-[1px] mt-4 py-3 flex items-center justify-between">
            <Link
              width={20}
              height={20}
              className="text-gray-400 hover:text-black transition-all duration-200 cursor-pointer"
              href={''}
            />
            <span className="flex text-gray-400 hover:text-black transition-all duration-200 cursor-pointer items-center text-xs">
              Powered by <Zap width={10} className="text-black" height={10} />{' '}
              Re:plain
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessContentModal
