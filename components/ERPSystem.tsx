import MaxWidth from './MaxWidth'

const ERPSystem = () => {
  return (
    <div className="bg-[#f4f7ff]">
      <MaxWidth className="py-24">
        <div>
          <h1 className="text-64px font-extrabold text-blue-1">ERP system</h1>
          <div className="flex mt-10 items-center justify-between">
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
            <div className="">
              <p>
                IT Systems of any level of complexity at a convenient time for
                you
              </p>
              <div className='grid grid-cols-3 gap-5'>
                
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default ERPSystem
