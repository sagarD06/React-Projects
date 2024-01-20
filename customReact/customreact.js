//babel - transpiler**
//same as below there will be a function in react backend to process by taking the object parsed by Babel
function customRender(element, container) {
  const domElement = document.createElement(element.type);
  console.log(element.children);
  domElement.innerText = element.children;
  for (const prop in element.props) {
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.getElementById("root");


//below is the format how react backend i.e., Babel parses the tags and converts to an object like below
const reactElement = {
  type: "a",
  props: { href: "https://google.com", target: "_blank" },
  children: "Click me",
};

customRender(reactElement, mainContainer);
