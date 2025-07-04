import React from 'react'
import Cbc1 from './Cbc1'
import HOCTask2 from './HOCTask2'

let Returned = HOCTask2(Cbc1)
const Task2Hoc1 = () => {
  return (
    <div>
        <Returned/>
    </div>
  )
}

export default Task2Hoc1;