import React, { useState } from 'react'
import PropsTask2Child from './PropsTask2Child';

const PropsTask2 = (props) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <PropsTask2Child props={{state, setState}}/>
    </div>
  )
}

export default PropsTask2;