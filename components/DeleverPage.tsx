import MaxWidth from './MaxWidth'

const DeleverPage = () => {
  return (
    <MaxWidth className="bg-white py-24">
      <div className="flex max-[944px]:flex-col-reverse items-center justify-between">
        <img src="/deleverPa.png" alt="" />
        <div className="flex flex-col bg-red-400 gap-10">
          <img src="del.svg" alt="" />
          <div className="flex bg-[#FFDDD3] items-center gap-2 rounded-lg">
            <img src="del1.svg" alt="" />
            <span>Deliver</span>
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default DeleverPage
