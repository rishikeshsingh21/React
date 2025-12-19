import './App.css'
import Card from './components/Card'


function App() {

  let propsObj = {
    userName : "Rishikesh",
    age: 23,
    height : 172
  }

  let propsArr = [1,2,3,4,5,6,6]

  return (
    <>
      <div>
        <h1  className="bg-sky-500/100 text-black p-4 rounded-xl">Tailwind Configuration And Testing Tailwind Integration</h1>
      </div>
      <Card userName = "Rishikesh" myObj = {propsObj} cgpa = {9.6}/>
      <Card userName = "Pratham" myArr = {propsArr} cgpa = {9.4}/>
      <Card />
    </>
  )
}

export default App
