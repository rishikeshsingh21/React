import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('black')
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setColor("Black")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
            <button onClick={() => setColor("brown")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>
            <button onClick={() => setColor("Pink")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={() => setColor("olive")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() => setColor("gray")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>
          </div>
        </div>
      </div>
  )
}

export default App
