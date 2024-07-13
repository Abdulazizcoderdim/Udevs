import MaxWidth from './MaxWidth'

const UxuiPage = () => {
  return (
    <MaxWidth className="py-24" id="uxui">
      <div>
        <h1 className="text-64px max-[944px]:text-[32px] font-extrabold leading-tight text-blue-1">
          UI / UX design
        </h1>
        <div className="flex max-[944px]:flex-col-reverse items-center mt-16 justify-between">
          <div className="w-1/2 max-[944px]:w-full flex flex-col gap-10">
            <p className="text-2xl max-[944px]:mt-5 max-[944px]:text-base font-medium text-[#18191f]">
              Our company takes a human-centered approach to design
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/ux.svg"
                  alt=""
                />
                <p className="text-xl font-medium">IOS</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/ui.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Android</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/prot.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Crossplatform</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/mobdes.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Crossplatform</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/web.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Crossplatform</p>
              </div>
              <div className="w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/atom.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Crossplatform</p>
              </div>
            </div>
            <h1 className="text-[32px] font-extrabold text-[#464359]">
              Technoologies
            </h1>
            <div className="flex items-center gap-16">
              <div className="flex flex-col gap-3">
                <img src="/figma.svg" alt="" />
                <span className="text-xl font-semibold text-black">Figma</span>
              </div>
              <div className="flex flex-col gap-3">
                <img src="/sketch.svg" alt="" />
                <span className="text-xl font-semibold text-black">Sketch</span>
              </div>
              <div className="flex flex-col gap-3">
                <img src="/lottie.svg" alt="" />
                <span className="text-xl font-semibold text-black">
                  Lottie
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <img src="/illus.svg" alt="" />
                <span className="text-xl font-semibold text-black">
                  Illustrator
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 max-[944px]:w-full flex items-center justify-center"
            style={{
              backgroundImage: `url('/bg-de.png')`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img src="/development.png" alt="" />
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default UxuiPage
