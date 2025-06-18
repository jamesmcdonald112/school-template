type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props ) {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}