const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={`${className} max-w-7xl bg-red-400 mx-auto`}>{children}</div>
}

export default MaxWidth
