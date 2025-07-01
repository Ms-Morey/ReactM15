import React from 'react'
import PropsTask4Child from './PropsTask4Child';

const PropsTask4 = () => {
  return (
    <div>
     <PropsTask4Child>
      <h1>Hello</h1>
      <h2>Hi</h2>
      <h3>Bye</h3>
     </PropsTask4Child>
    </div>
  )
}

export default PropsTask4;

// props.children 
// It is a special property that allows components to receive 
// and render the elements placed between theril opening and closing tags