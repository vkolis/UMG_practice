type NavigationLayoutProps = {
  children: React.ReactNode
}

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <h1>Navigation</h1>
      {children}
    </>
  )
}
