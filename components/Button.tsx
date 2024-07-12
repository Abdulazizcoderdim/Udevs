const Button = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`inline-block cursor-pointer bg-[#1B5BF7] text-center px-8 font-medium py-2 rounded-md text-white ${className}`}
    >
      {children}
    </div>
  )
}

export default Button
