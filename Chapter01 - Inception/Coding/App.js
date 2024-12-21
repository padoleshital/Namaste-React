const heading = React.createElement("h1",
    {
        id:"heading",
        style: 
        {
            background:"Grey"        
        },
        className:"Title",

    },"Hello ReactJs"); //create h1 element in react

    const heading1 = React.createElement("h1",{id:"heading"},"This is Heading1 Tag");

    const paragraph = React.createElement("p",{id:"para"},"Paragraph of the page");  


    const container = React.createElement("div",{id:"container"},[heading ,paragraph, heading1])

    const root = ReactDOM.createRoot(document.getElementById("root")); //put h1 into DOM

    root.render(container);