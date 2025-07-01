import React, { useState } from 'react'
import car from '../../../../assets/a.jpg'
import wheel from '../../../../assets/e.jpg'

const UseStateTask7 = () => {
  const [state , setState] = useState(car)
    //Toggle the image by default.
    //On button click , switch between two images (use URLs or local images);
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <img src={state} alt="" style={{
        height:"400px",
        width:"400px"
      }} />
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white mb-2" onClick={()=>{setState(wheel)}}>img1</button>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white" onClick={()=>{setState(car)}}>img2</button>
    </div>
  )
}

export default UseStateTask7;