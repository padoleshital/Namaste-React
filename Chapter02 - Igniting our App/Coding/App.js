const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child1" },
     [ React.createElement("h1", {}, "Hello I am h1 tag"),      // Array of children
        React.createElement("h2", {}, "Hello I am h2 tag"),
      React.createElement("p", { id: "para" }, "Pragraph of the page")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
       [ React.createElement("h1", {}, "Hello I am h1 tag"),      // Array of children
          React.createElement("h2", {}, "Hello I am h2 tag"),
        React.createElement("p", { id: "para" }, "Pragraph of the page")]
      ),
    React.createElement(
      "div",
      {id: "child3"},
      [ React.createElement("p",{},"This is paragraph"),
      React.createElement("p",{},"This is paragraph1"),
      ]
    )    
  );  
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent);