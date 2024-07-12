import Button from './Button'
import HomeTextAnime from './HomeTextAnime'
import MaxWidth from './MaxWidth'

const HomePage = () => {
  return (
    <MaxWidth className="py-24">
      <div className="flex max-[944px]:flex-col max-[944px]:text-center max-[944px]:justify-center justify-between items-center">
        <div className="flex flex-col gap-10 max-[944px]:items-center max-[944px]:mb-5">
          <img className='w-[270px] max-[944px]:w-[130px]'  src="/logog.svg" alt="" />
          <h1 className="text-5xl max-[944px]:text-2xl font-semibold text-gray-700">
            IT-Outsourcing Company
          </h1>
          {/*  */}
          <HomeTextAnime />
          <Button className="hover:scale-105 max-[944px]:hidden transition-all py-4 w-60 duration-200 text-xl">
            Contact
          </Button>
        </div>
        <div>
          <img src="/home.svg" alt="" />
        </div>
      </div>
    </MaxWidth>
  )
}

export default HomePage
