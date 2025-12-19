
import { useState } from 'react';
import './App.css'

function App() {

    const [counter, setCounter] = useState(15)

    function Increment(){
      // const ele = document.getElementById('head')
      // ele.innerHTML = counter++;
      // console.log("value Increment:",Math.random())
      // console.log(counter)
      // setCounter(counter = counter + 1)
      // console.log("increment called")
      setCounter(prev => prev + 1)
    }
    function Decrement(){
      // const ele = document.getElementById('head')
      // ele.innerHTML = `Counter Value : ${counter--}`
      // console.log("Value Decremented",Math.random())
      // console.log(counter)
      setCounter(prev => prev - 1)
    }
  return (
    <>
      <h1> Counter </h1>
      <h2 id="head"> Counter Value : {counter}</h2>
      <button 
      onClick={Increment}>Increment</button>
      <button 
      onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
