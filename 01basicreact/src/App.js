import Chai from "./chai";

function App() {
    const jsx = (
    <>
      <Chai />
      <h1>Hello React | Rishikesh Singh </h1>
      <p>Learn about how to create the react and project through react and vite</p>
      <ul>
        <li>npx create-react-app fileName --- react</li>
        <li>npm create vite@latest ---- vite</li>
      </ul>
    </>
  );

  console.log("Compiled JSX object:", jsx); // 👈 Logs the actual React element

  return jsx;
}

export default App;
