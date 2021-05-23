function HStack({children, flexible=false}) {
  return (
    <div className={`flex flex-row content-center justify-items-start items-center gap-x-4 ${flexible ? 'flex-wrap': 'flex-nowrap'}`}>
      {children}
    </div>
  )
}

export default HStack
