import React from 'react'
import PropsTask1Child1Child from './PropsTask1Child1Child';

const PropsTask1Child = (props) => {
  console.log(props.props.add);
  return (

    <div>
      <PropsTask1Child1Child props={props}/>
    </div>
  )
}

export default PropsTask1Child;