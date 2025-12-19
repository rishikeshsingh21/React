import {useState,useCallback, useEffect, useRef} from "react"


function App() {

  const [lentht, setLentht] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
      
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()_+<>?/|{}[]"

      for(let i=0; i<lentht;i++){
        let idx = Math.floor(Math.random()*str.length)
        pass += str[idx]
      }
      setPassword(pass);
    },
    [lentht,numberAllowed,charAllowed,setPassword],
  )

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 7)
    //console.log("selected Range:",val)
    //window.navigator.clipboard.writeText(password)
    

    let input = passwordRef.current
    if(!input) return
    
    input.setSelectionRange(0,7)
    window.navigator.clipboard.writeText(input.value.slice(0,7))
    
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[lentht,numberAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg p-4 my-8  text-orange-500 bg-gray-700 ">
        <h1 className="text-4xl text-center text-white mb-4">Random Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden bg-white">
          <input 
          type = "text"
          value = {password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref = {passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          >Copy</button>
        </div> 
        <div className="flex gap-x-2 px-2 py-3 justify-around text-xl">
          <div className="items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={lentht}
            className="cursor-pointer"
            onChange={(e)=>{setLentht(e.target.value)}}
            />
            <label>Lenght: {lentht}</label>
          </div>
          <div className="items-center gap-x-1">
            <input 
              type = "checkbox"
              defaultChecked = {numberAllowed}
              id = "numberInput"
              onChange={()=>{
                setNumberAllowed(prev => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="items-center gap-x-1">
            <input 
              type = "checkbox"
              defaultChecked = {charAllowed}
              id = "charInput"
              onChange={()=>{
                setCharAllowed(prev => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
          className="border px-3 py-1 rounded-lg cursor-pointer border-transparent hover:border-amber-500 bg-orange-300"
          onClick={passwordGenerator}
          >Next</button>
        </div>
      </div>
    </>
  )
}

export default App
