import React from 'react'

function Card({channel="MyName",btnText ="Visit Profile"}) {  // rfce (react functional component) get defautl props which is destucture instant which is passed from the rendering site  with the default value if the value is not pass
  // console.log(props)
  // let userName = props.channel;
  // console.log(props.channel);
  return (
    <div>
      <div class="relative h-[400px] w-[300] rounded-md ">
      <img 
      src = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib-rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt='AurMax Pro'
      class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">{channel}</h1>  {////here use the destucture value on the same componet with diffent values or date 
        }
        <p class="mt-2 text-sm text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, obcaecati.</p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btnText}</button>
      </div>
      </div>
    </div>
  )
}

export default Card
