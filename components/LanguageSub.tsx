const LanguageSub = () => {
  return (
    <div className="min-w-[120px] py-[16px] bg-white rounded-lg shadow-lg transition duration-200 ">
      <div className="py-2 px-3 cursor-pointer hover:bg-blue-600 hover:text-white w-full flex items-center transition-all duration-200 group gap-2">
        <img width={30} height={30} src="/rus.svg" alt="" />
        <span>Pyc</span>
      </div>
      <div className="py-2 px-3 cursor-pointer hover:bg-blue-600 hover:text-white w-full flex items-center transition-all duration-200 group gap-2">
        <img width={30} height={30} src="/eng.svg" alt="" />
        <span>English</span>
      </div>
    </div>
  )
}

export default LanguageSub
