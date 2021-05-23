function VStack({children}) {
  return (
    <div className="grid grid-flow-row auto-rows-auto place-content-center place-items-center gap-y-4">
      {children}
    </div>
  )
}

export default VStack
