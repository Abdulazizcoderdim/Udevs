const MaxWidth = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return (
    <div id={id} className={`${className} lg:max-w-7xl px-3 mx-auto`}>{children}</div>
  )
}

export default MaxWidth
