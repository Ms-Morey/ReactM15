import React from 'react'
import { useAdd } from './CustomHooks';

const CustomHookIntro = () => {
    const value = useAdd(30,40);
    console.log(value);
  return (
    <div>CustomHookIntro</div>
  )
}

export default CustomHookIntro;