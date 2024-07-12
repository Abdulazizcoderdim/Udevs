import { X } from 'lucide-react'

type MessContentModalProps = {
  setOpenMess: React.Dispatch<React.SetStateAction<boolean>>
}

const MessContentModal = ({ setOpenMess }: MessContentModalProps) => {
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
          <X className="cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default MessContentModal
