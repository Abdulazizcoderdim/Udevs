import { url } from 'inspector'
import MaxWidth from './MaxWidth'

const DevelopmentPage = () => {
  return (
    <MaxWidth className="py-24">
      <div>
        <h1 className="text-64px font-extrabold leading-tight text-blue-1">
          Development of mobile <br /> applications
        </h1>
        <div className="flex items-center mt-16 justify-between">
          <div className="w-1/2 flex flex-col gap-10">
            <p className="text-2xl font-medium text-[#18191f]">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="flex items-center gap-4">
              <div className="min-w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/apple.svg"
                  alt=""
                />
                <p className="text-xl font-medium">IOS</p>
              </div>
              <div className="min-w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/brand-android.svg"
                  alt=""
                />
                <p className="text-xl font-medium">Android</p>
              </div>
              <div className="min-w-[150px] bg-[#f4f7ff] py-[10px] pr-5 pl-[10px] rounded-md">
                <img
                  width={56}
                  height={56}
                  className="mb-3 text-blue-1"
                  src="/phone-mobile.svg"
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
                <img src="/swift.svg" alt="" />
                <span className="text-xl font-semibold text-black">Swift</span>
              </div>
              <div className="flex flex-col gap-3">
                <img src="/kotlin.svg" alt="" />
                <span className="text-xl font-semibold text-black">Kotlin</span>
              </div>
              <div className="flex flex-col gap-3">
                <img src="/flutter.svg" alt="" />
                <span className="text-xl font-semibold text-black">
                  Flutter
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 flex items-center justify-center"
            style={{ backgroundImage: url(bgIma) }}
          >
            <img src="/development.png" alt="" />
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default DevelopmentPage
