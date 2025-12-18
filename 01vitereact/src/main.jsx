import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>
        Custom App!
      </h1>
    </div>
  )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElementReactSpecific = React.createElement(
  'a',
  {href:'https://google.com',target : "_blank"},
  'Click to visit google Home Page'
)
createRoot(document.getElementById('root')).render(
    //MyApp(),
    //<MyApp/>
   // <reactElement/>
   //anotherElement
   reactElementReactSpecific
)
