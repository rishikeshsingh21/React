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
  anotherUser  /////  usper se saare tree ban jayege then variable inject honge 
)
createRoot(document.getElementById('root')).render(
 
 
 ReactElement //this function can be call as MyApp()
 // 0    /// this render fn render the html tag or uppend the html tag to the dom which is converted from the jsx by the babel{transpiler}  which make the tree of the jsx code and create the html tag through the javascript 
 //like the anotherElement contain the html tag which is dirctly render on the page 
 //onelevel up the reactElement which contain all the details through which the elemnt is made then the element get created 
   
  
)


// 🏗️  React Fiber Reconciler (Diffing Algorithm)
// React uses a system called Fiber to efficiently compare the new Virtual DOM with the previous one. The Reconciler determines the minimal number of changes needed to update the real DOM.

// Fiber Process
// It compares the old Virtual DOM with the new one.
// It calculates what has changed.
// It updates only the necessary parts of the Real DOM.


// 1️⃣ JSX Code → You write JSX
// 2️⃣ Babel Transpilation → Converts JSX to React.createElement()
// 3️⃣ Virtual DOM Creation → React creates a Virtual DOM tree in memory
// 4️⃣ Fiber Reconciliation → Compares the old and new Virtual DOM
// 5️⃣ Efficient Real DOM Update → Only necessary changes are made