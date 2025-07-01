import React from 'react'
import PropsTask1Child from './PropsTask1Child';

const PropsTask1 = () => {
  return (
    <div>
        <PropsTask1Child props={{name:"Mahesh",
          age: 23,
          add: "Pune"
        }}/>
    </div>
  )
}

export default PropsTask1;