const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`${className} lg:max-w-7xl px-3 mx-auto`}>{children}</div>
  )
}

export default MaxWidth
