import { useState } from 'react'

import './App.css'

function App() {
// react hooks are used to control the ui updation 

  let [counter,setCounter] = useState(5)   ///  this is the react hooks that comes in picture when UI updation comes in picture 
   /// useState(defaultValue of any dataType like object array)  ==from this hook we get a itterator and the method

  // let counter = 0;
  function increment(){
    if(counter < 20){
      // setCounter(counter +1 );
      // setCounter(counter +1 );
      // setCounter(counter +1 );
      // setCounter(counter +1 );
      // setCounter(counter +1 );
      setCounter(prevCounter => prevCounter+1 );
      setCounter(prevCounter => prevCounter+1 );
      setCounter(prevCounter => prevCounter+1 );
      setCounter(prevCounter => prevCounter+1 );
      setCounter(prevCounter => prevCounter+1 );
    }
    
    // console.log(counter);
    // console.log("value Incemented",Math.floor(Math.random()*10+1))
    
  }
  function decrement(){
    if( counter > 0)
    setCounter(counter - 1);
    // counter--;
    // console.log("The value of counter:"+counter);
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={increment}
      >Increment {counter}</button>
      <br />
      <button
       onClick={decrement}
      >Decrement {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
