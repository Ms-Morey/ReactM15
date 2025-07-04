import React from 'react'

const MemoizationIntroChild2 = () => {
   console.log("child2")
    let i = 100000000;
    while(i>0){
        i--;
    }
  return (
    <div>MemoizationIntroChild2</div>
  )
}

export default React.memo(MemoizationIntroChild2);