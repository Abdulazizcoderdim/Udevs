import Button from './Button'
import MaxWidth from './MaxWidth'

const HomePage = () => {
  return (
    <MaxWidth className="bg-red-200 py-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <img width={270} height={270} src="/logog.svg" alt="" />
          <h1 className='text-5xl font-semibold text-gray-700'>IT-Outsourcing Company</h1>
          {/*  */}
          <Button className='hover:scale-105 transition-all py-4 w-60 duration-200 text-xl'>
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
