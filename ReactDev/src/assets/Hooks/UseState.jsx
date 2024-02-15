import React, { useState } from 'react';


const UseState = () => {
  const [message, setMessage] = useState("hello user good afternoon");


  const changeMessage = () => {
    console.log('Function Clicked!');
    setMessage((prevData)=>{
      console.log("Previous Data:",prevData);
      return "hello user Good Afternoon"
    });
  }
  return (<>

    <p>{message}</p>
    <button className=' border-black-500 bg-slate-600 border-rounded-lg' onClick={changeMessage}>ChangeMessage</button>
  </>)
} 

export default UseState;

