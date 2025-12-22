import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then((data)=>{
    //         setData(data)
    //         //console.log(data)
    //     })
    // },[])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>Github folloers:{data.followers}
        <img src={data.avatar_url} alt="profile pic" className='text-center w-sm' />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async ()=> {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}