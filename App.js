const heading = React.createElement(
    "h1", 
    {id:"heading", xyz:"abc"},
     "Hello from React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

//implement 2 sibiling elements using array of elements as 3rd attribute.
const parent = React.createElement("div",
                                 {id:"parent"}, 
                                    React.createElement("div", {id:"child"},
                                    [ React.createElement("h1", {}, "I am an h1 tag in react!"), React.createElement("h2", {}, "I am an h2 tag in react!")]));
console.log(parent);

root.render(parent);
