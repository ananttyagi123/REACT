
import { useState,React } from 'react';
import {lazy, Suspense} from 'react';
// import Text from './assets/ReactAPI/Toogle.jsx';

// creating a state for toggle 
// if false then not show 
// if state is true then show
// conditional rendering 

// LAZY API it will Create a condition that it will not SAve the Text before it is not Callled at it initial state it reduce the load

// importing the comoponent  with lazy
const Text = lazy(()=>
  import('../src/assets/ReactAPI/Toogle.jsx'));
const App = () => {
  const [show, setShow] = useState(false);
  var handleToogle = () => {
    console.log('button Clicked!!')
    setShow((prev) => !prev);
  }
  return (<>
    <button onClick={handleToogle} className='border-solid rounded-lg p-2 bg-blue-400'>Click to Toogle</button>
   {show && (<Suspense fallback={<div>I am Loading!</div>}>
     <Text></Text>
    </Suspense>)
} 
  </>);

}
export default App;
