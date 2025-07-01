import React from 'react'

const PropsTask3Child = ({name="Tanmay"}) => {
    console.log(name)
  return (
    <div className='py-2 px-3 bg-blue-600 text-white rounded-3xl'>{name}</div>
  )
}

export default PropsTask3Child;

//#What is props ?
//props is the object 
// props is react (short for properties) are read-only inputs passed from a parent component to a child componenent.
// They allow you to pass data and event handlers down the componenet tree, enanling dynamic rendering of component.
// state are mutable and props are immutable.
// difference between state and props

//#Default props
// default props in react are the default values given to props when no value is passed from the parent component
