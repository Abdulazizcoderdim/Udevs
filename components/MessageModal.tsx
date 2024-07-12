'use client'

import { useState } from 'react'
import MessContentModal from './MessContentModal'

const MessageModal = () => {
  const [openMess, setOpenMess] = useState(false)

  return (
    <>
      {openMess && (
        <div className="fixed top-0 right-0 w-96 shadow-2xl transition-all duration-200 z-20 bg-white bottom-0">
          <MessContentModal setOpenMess={setOpenMess} />
        </div>
      )}

      {!openMess && <span className="fixed right-9 bottom-9 cursor-pointer">
        <img
          onClick={() => setOpenMess((prev) => !prev)}
          width={60}
          height={60}
          src="/message.webp"
          alt=""
        />
      </span>}
    </>
  )
}

export default MessageModal
