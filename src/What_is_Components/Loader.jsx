import React from 'react'

const Loader = ({color}) => {
  return (
    
      <div
        className={`animate-spin rounded-full h-20 w-20 border-t-8 border-b-8 ${color}`}>
      </div>
  )
}

export default Loader;
