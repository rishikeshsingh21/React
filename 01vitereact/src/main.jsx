import  React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>Custom React!</h1>   {/*all this block of jsx is converted into tree like structure and then render to the root */}
    </>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//     href:"https://google.com",
//     target: "_blank"
//   },
//   Children:"click me to visit google"
// }




// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const anotherUser = "chai or code"
const ReactElement = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  "click me to visit google!",
  anotherUser
)
createRoot(document.getElementById('root')).render(
 
 
 ReactElement
   
  
)
