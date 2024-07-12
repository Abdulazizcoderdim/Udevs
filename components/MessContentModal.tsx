"use client"

import { Link, X, Zap } from 'lucide-react'

type MessContentModalProps = {
  setOpenMess: React.Dispatch<React.SetStateAction<boolean>>
}

const MessContentModal = ({ setOpenMess }: MessContentModalProps) => {
  const [message, setMessage] = useState("") 
  return (
    <div>
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
      <div className="bg-[#F9F9F9] flex-1">a</div>
      {/* footer */}
      <div className='border-t-[1px] px-4 py-3'>
          <div className='flex flex-col'>
             <input className='outline-none ' type="text" placeholder="Введите сообщение…" />
             <div className='border-t-[1px] mt-4 py-3 flex items-center justify-between'>
               <Link width={20} height={20} className='text-gray-400 hover:text-black transition-all duration-200 cursor-pointer' href={''} />
               <span className='flex text-gray-400 hover:text-black transition-all duration-200 cursor-pointer items-center text-xs'>Powered by <Zap width={10} className='text-black' height={10}/> Re:plain</span>
             </div>
          </div>
      </div>
    </div>
  )
}

export default MessContentModal
