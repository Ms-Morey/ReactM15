import React from 'react'

const PropsTask4Child = ({children}) => {
    console.log(children);
  return (
    <div>
        {children}
    </div>
  )
}

export default PropsTask4Child


// props.children 
// It is a special property that allows components to receive 
// and render the elements placed between theril opening and closing tags