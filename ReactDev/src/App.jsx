
import './App.css'
import Component from './Component.jsx';
import { Button } from './Button.jsx';
import { react, useState, useEffect } from 'react';




function App() {
  // States 
  // const [data, setData] = useState(
  //   // data at initial state 
  //   [
  //     { "id": "a", "text": "text1" },
  //     { "id": "b", "text": "text2" },
  //     { "id": "c", "text": "text3" },
  //   ]
  // );
  // // create a function to change the State or update the Data
  // const addData = () => {
  //   setData([...data, { "id": "1", "text": "text2" }])
  //   console.log(setData);
  // }

  // const KeyButton = () => {
  ///  const ketEvent = document.getElementById('eventInfo');
  //   ketEvent.addEventListener('keydown', { displayEventInformation })
  // }
  const UseEffect = () => {
    const [data, setData] = useState(0);
    useEffect(() => {
      console.log('use effect render');
    })
   
  }
  return (

    <>
      
      <UseEffect></UseEffect>
      {data}
      <button onClick={
      setData((prevData) =>
        prevData + 1)
    }>Update</button>

    </>
  )
}

export default App;
