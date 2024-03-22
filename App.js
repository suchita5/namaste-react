const parent = React.createElement("div",{id: "parent"}, React.createElement("div", {id:"child"}, "I am child1"))

const heading = React.createElement("h1", 
 {id:"heading", abc:"eee"}, "Hello World from React")
const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(parent)

root.render(heading)