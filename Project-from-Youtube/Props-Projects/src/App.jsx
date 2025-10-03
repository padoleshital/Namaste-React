
import React from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodInput from './components/FoodInput';
import { useState } from 'react';


function App(){
//let foodList= ["Pizza", "Burger", "Pasta", "Salad", "Sushi","Tacos"];
//useState with initial value

let [foodList, setFoodItems] = useState(["Pizza", "Burger", "Pasta", "Salad"]);
const OnKeyDown = (event)  =>{ 
  if(event.key === "Enter")
  {
    let newFoodItem = event.target.value;
    event.target.value ="";
    let newItems =[...foodList,  newFoodItem];
    console.log("Food value is"+ newFoodItem)
    setFoodItems(newItems);
  }
  
}

return (
  <>
    <Container>
      {/* //children prop */}
      <h1 className="food-title">Healthy Food</h1>
      <FoodInput handleKeyDown={OnKeyDown}></FoodInput>
      <FoodItems className="food-items" items={foodList} />
      <ErrorMessage className="food-error" items={foodList} />
    </Container>
    <Container>
      <p>Above is the list of healthy food items.</p>
    </Container>
  </>
);
}

export default App
