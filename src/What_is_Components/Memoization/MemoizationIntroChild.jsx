import React from 'react'

const MemoizationIntroChild = () => {
    console.log("hey from child 1")
  return (
    <div>
        MemoizaitonChild
    </div>
  )
}

export default React.memo(MemoizationIntroChild);
// React.memo() is an inbuilt higher order function