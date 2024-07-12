const Button = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`${className} inline-block cursor-pointer bg-[#1B5BF7] px-8 font-medium py-2 rounded-md text-white`}
    >
      {children}
    </div>
  )
}

export default Button
