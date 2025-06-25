import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white text-3xl'>User: {id} </h1>
    </div>
  )
}

export default User
