//  empty object 
// const heading = ReadableByteStreamController.createElement("h1", {  }, "Hello ReactJs"); //create h1 element in react

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading);


// react element with id and style

// const heading = React.createElement("h1",
//     {                           // object with id and style
//         id:"heading",
//         style: 
//         {
//             background:"Grey"        
//         },
//         className:"Title",

//     },"Hello ReactJs"); //create h1 element in react

// const heading1 = React.createElement("h1",{id:"heading"},"This is Heading1 Tag");



//  nested element
/*
*   <div id="parent">
         <div id="child">        
*            <h1>Hello I am h1 tag</h1>*         
*         </div>
*   </div>
* ReactElement(Object) => it create a HTML which brower can understand
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello I am h1 tag")
//   )
// );  



//  nested elements with there sibling
/*
*   <div id="parent">
         <div id="child">        
*            <h1>Hello I am h1 tag</h1>  
                <h1>Hello I am h2 tag</h1> 
                <p id="para">Hello I am p tag</p>        
*         </div>
*   </div>
*
*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello I am h1 tag"), // Array of children
//     React.createElement("h2", {}, "Hello I am h2 tag"),
//     React.createElement("p", { id: "para" }, "Pragraph of the page"),
//   ])
// );  


//  nested elements with there sibling
/*
*   <div id="parent">
         <div id="child1">        
*            <h1>Hello I am h1 tag</h1>  
                <h1>Hello I am h2 tag</h1> 
                <p id="para">Hello I am p tag</p>        
*         </div>
          <div id="child2">        
*            <h1>Hello I am h1 tag</h1>  
                <h1>Hello I am h2 tag</h1> 
                <p id="para">Hello I am p tag</p>        
*         </div>
*   </div>
*/

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
      )
  );  
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent);