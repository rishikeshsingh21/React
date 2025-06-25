import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContexProvider"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
