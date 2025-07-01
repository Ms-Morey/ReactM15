import React from 'react'
import PropsTaskChil1Child2 from './PropsTaskChil1Child2';

const PropsTask1Child1Child = (props) => {
    console.log(props.props.props.name);
  return (
    <div>
        <PropsTaskChil1Child2 props={props}/>
    </div>
  )
}

export default PropsTask1Child1Child;