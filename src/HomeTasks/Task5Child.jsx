import React from 'react'

const Task5Child = ({props}) => {
    const {name} = props;
  return (
    <div>
        <h1>Child's Name : {name}</h1>
    </div>
  )
}

export default Task5Child