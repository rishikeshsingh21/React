import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:"Rishi",
    age:22
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
      <Card channel="chaiaurCode" someObject = {myObj}  btnText="view my porfile"/> {//passing the value to the props of the components and passed as the variable  like myObj is a object pass a the variable to the component card as props
      } 
      <Card channel="NOT" btnText = "Be in your limits"/>
      <Card />
    </>
  )
}

export default App
