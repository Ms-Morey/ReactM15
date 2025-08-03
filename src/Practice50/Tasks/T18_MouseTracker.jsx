import React, { useEffect, useState } from 'react'

const T18_MouseTracker = () => {
    const [cord, setCord] = useState({x:"", y:""})
    
   useEffect(() => {
    const handleMouseMove = (e) => {
      setCord({ x: e.clientX, y: e.clientY });
    //   console.log(e)
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Mouse Coordinates</h2>
      <p className="text-lg">X: {cord.x}</p>
      <p className="text-lg">Y: {cord.y}</p>
    </div>
  );
}

export default T18_MouseTracker