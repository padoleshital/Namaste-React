import React from "react";

const FoodItems =() =>{
    return (
      // Using React.Fragment to avoid adding extra nodes to the DOM
      <React.Fragment>
         <ul className="list-group">
          {
            foodItem.map((item)=>(
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}         
        </ul>
        </React.Fragment>
    );
    

}
export default FoodItems;