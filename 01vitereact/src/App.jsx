   //<></> this is the fragment in the rect which return the all element because in react only one element is allow to return 

import Chai from "./chai"
function App() {
  const username = "rishikesh"
  return (
    <>
      <Chai />
      <h1>Chai or react | Welcome {username}</h1> {/*// Inside the  {} is the expression the evaluated expressin */}
    </>
  )
}

export default App
