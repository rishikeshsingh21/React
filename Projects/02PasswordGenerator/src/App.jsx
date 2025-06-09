import React, { useState, useCallback,useEffect,useRef } from 'react'

const App = () => {
  const [length,setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPasswoed] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*():><?/\-=,."

    for(let i = 1; i<= length ; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
      console.log(pass)
    }
    setPasswoed(pass)
  }, [length,numberAllowed,charAllowed,setPasswoed])

  const copyPasswordToClibboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,setCharAllowed])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' >
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 mx-3 bg-white rounded-lg '
        placeholder='Password'
        readOnly
        ref = {passwordRef}
      />
      <button onClick={copyPasswordToClibboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  rounded-lg'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 pb-3 px-3'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
           />
           <label htmlFor="charInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id="numberInput"
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}
           />
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
