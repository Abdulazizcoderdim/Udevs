import MaxWidth from './MaxWidth'

const ITConsulting = () => {
  return (
    <MaxWidth className="py-24" id="itconsulting">
      <div>
        <h1 className="text-64px max-[944px]:text-[32px] font-extrabold leading-tight text-blue-1">
          DIT consulting
        </h1>
        <div className="flex max-[944px]:flex-col-reverse items-center mt-16 justify-between">
          <div className="w-1/2 max-[944px]:w-full flex flex-col gap-10">
            <p className="text-2xl max-[944px]:mt-5 max-[944px]:text-base font-medium text-[#18191f]">
              We can improve the qualifications of your <br /> employees thereby
              increasing the efficiency <br /> of your company
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/frontend.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Frontend</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/backend.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Backend</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/arch.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Architecture</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/dev.svg"
                  alt=""
                />
                <p className="text-xl font-medium">DevOps</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/uxui.svg"
                  alt=""
                />
                <p className="text-xl font-medium">UX/UI</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/qa.svg"
                  alt=""
                />
                <p className="text-xl font-medium">QA</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-[944px]:w-full flex items-center justify-center">
            <img src="/it.svg" alt="" />
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default ITConsulting
