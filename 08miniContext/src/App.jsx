import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {  return (
    <UserContextProvider>
      <h1 className='bg-gray-500 text-white text-2xl text-center'>Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
