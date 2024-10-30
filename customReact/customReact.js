function customRender(reactElement, container){
    //--------BASIC WAY OF CREATING AN ELEMENT
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    //--- EXPERT WAY LOOP
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
       if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href : "https:/google.com",
        target :" _blank"
    },
    children: 'click me to visit goooooogle'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)