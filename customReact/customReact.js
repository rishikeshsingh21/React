 function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for (const propKey in reactElement.props){
        if(propKey === 'children') continue;
        domElement.setAttribute(propKey,reactElement.props[propKey])
    }
    mainContainer.appendChild(domElement)
 }

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root")

console.log(reactElement.props.href)
console.log(reactElement.props.target)


customRender(reactElement, mainContainer)