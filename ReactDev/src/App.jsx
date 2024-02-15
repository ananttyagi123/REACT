import react, { useState } from 'react'
import './App.css'
import Component from './Component.jsx';
import { Button } from './Button.jsx';
import UseState from './assets/Hooks/UseState.jsx';



function App() {
  // States 
  const [data, setData] = useState(
    // data at initial state 
    [
      { "id": "a", "text": "text1" },
      { "id": "b", "text": "text2" },
      { "id": "c", "text": "text3" },
    ]
  );
  // create a function to change the State or update the Data
  const addData = () => {
    setData([...data, { "id": "1", "text": "text2" }])
    console.log(setData);
  }

  // const KeyButton = () => {
  ///  const ketEvent = document.getElementById('eventInfo');
  //   ketEvent.addEventListener('keydown', { displayEventInformation })
  // }

  return (

    <>
      {data.map((item, index) => <h1 key={index}>{data[0].text}</h1>)}
      <Button prop={addData} />
      <UseState></UseState>
    </>
  )
}



export default App
