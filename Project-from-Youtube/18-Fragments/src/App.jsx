import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

   let foodItem = ["Dal", "Salad", "Milk", "Paneer", "Fruits", "Vegetables","Ghee"];
  
  let emptyMessage = foodItem.length === 0 ? <p>I am still hungry</p> : null;
  
 
  
  return (
        <>
        <h1>Healthy Food</h1>
        {emptyMessage}
        
        <ul className="list-group">
          {
            foodItem.map((item)=>(
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}         
        </ul>
      </>
  );
}

export default App
