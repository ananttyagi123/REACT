import { useState } from 'react'
import './App.css'
import Component from './Component.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component />
      <Component />
      <Component />
    </>
  )
}

export default App
