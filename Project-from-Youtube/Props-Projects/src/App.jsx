
import React from 'react';
import './App.css';
import FoodItems from '../components/foodItems';
import ErrorMessage from '../components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
 let foodList= ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
// let foodList= [];  
return (    
    <div>
    <h1 className="food-title">Food Items</h1>
     <FoodItems className="food-items"  items={foodList}/>
     <ErrorMessage className="food-error" items={foodList} />   
    </div>
  );
}

export default App
