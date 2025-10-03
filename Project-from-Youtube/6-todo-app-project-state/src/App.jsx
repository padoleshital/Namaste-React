import AppName from "./component/AppName.jsx";
import TodoForm from "./component/TodoForm.jsx";
import TodoItems from "./component/TodoItems.jsx";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  //  let initialtodoList = [
  //   { id: 1, name: "Buy Milk", tDate: "4/10/2025" },
  //   { id: 2, name: "Buy Bread", tDate: "4/11/2025" },
  //   { id: 3, name: "Buy Fruits", tDate: "4/12/2025" },
  //   { id: 4, name: "Buy Vegetables", tDate: "4/13/2025" },
  //   { id: 5, name: "Buy Meat", tDate: "4/14/2025" },
  // ];

  const [todoItem, setTodoList] = useState([]);
 
  const handleNewItem = (itemName,itemDate) =>{
    console.log(`New Item Added: ${itemName} Date:${itemDate}`);
    const newTodoItems = [...todoItem,{name:itemName,tDate:itemDate}];
    setTodoList(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItem.filter(item = item.name !== itemName);
    setTodoList(newTodoItems);
    console.log(`Item Delete: ${todoItemName}`);    
  }

  return (
    <center className="todo-container">
      <AppName />
      <TodoForm onNewItem={handleNewItem} />
      {todoItem.length === 0 &&<WelcomeMessage ></WelcomeMessage>}
      <TodoItems displayTodoItems={todoItem} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}
export default App;
