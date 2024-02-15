import React from 'react'
import './index.css'
export const Button = ({ prop }) => {
  return (
    // first we pass the property to out component 
    // then in the main component create a function and equal it to prop then call the event listener to call the property
    <button onClick={prop} className='bg-red-500 border-2 border-amber-500'>add data</button>
  )
}

