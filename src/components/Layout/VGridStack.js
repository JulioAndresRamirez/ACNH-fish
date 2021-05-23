import React from 'react'

function VGridStack({ Children }) {
  return <div className="grid grid-flow-row auto-rows-min ">{Children}</div>;
}

export default VGridStack
