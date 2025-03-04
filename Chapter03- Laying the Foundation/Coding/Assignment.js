import React from "react";
import ReactDOM from "react-dom/client";

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const heading = React.createElement("div", { className: "div1",key:"Title" }, [
  React.createElement("h1", { id: "heading1" , key:"h1" }, "This is First Heading"),
  React.createElement("h2", { id: "heading2", key:"h2" }, "This is Second Heading"),
  React.createElement("h3", { id: "heading3", key:"h3" }, "This is Third Heading"),
]);

//Create the same element using JSX
const jsxHeading =(
    <div className="div1">
        <h1 key="h1">This is First Heading</h1>
        <h2 key="h2">This is Second Heading</h2>
        <h3 key="h3">This is Third Heading</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root .render(jsxHeading)

//Create a functional component of the same with JSX

// const BasicDemo = () => {
//     return (
//         <div className="div1">
//         <h1 key="h1">This is First Heading</h1>
//         <h2 key="h2">This is Second Heading</h2>
//         <h3 key="h3">This is Third Heading</h3>
//     </div>
// )}

// Q: Pass attribute into the tag in JSX
// const BasicDemo = () => {
//     return (
//         <div className="div1">
//         <h1 style={{color:"red"}} key="h1">This is First Heading</h1>
//         <h2 style={{color:"green"}} key="h2">This is Second Heading</h2>
//         <h3 style={{color:"blue"}} key="h3">This is Third Heading</h3>
//     </div>
// )}


//Composition of Component(Add a component inside another)
// const BasicDemo1 = () => {
//     return (
//         <BasicDemo/>,
//         <BasicDemo2></BasicDemo2>
//     )
// }
// const BasicDemo2 = () => {
//     return (
//         <h1>This is BasicDemo</h1>
//     )
// }


// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//   return <h2 style={{ color: "red" }}>This Title Element</h2>;
// }; // This is Title Component

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {/* This is {TitleComponent} */}
//       {element}
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       {/* This is {<TitleComponent/>} */}
//       <TitleElement/>
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       {/* This is {<TitleComponent></TitleComponent>}*/}
//       <TitleElement></TitleElement>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

