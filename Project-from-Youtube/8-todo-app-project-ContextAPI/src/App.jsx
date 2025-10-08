import AppName from "./component/AppName.jsx";
import TodoForm from "./component/TodoForm.jsx";
import TodoItems from "./component/TodoItems.jsx";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import "./App.css";
import { useState } from "react";

function App() {  
  //use state 
  const [todoItems, setTodoItems] = useState([]);

  //add new item
  const addNewItem = (itemName, itemDate) => {     
    const newTodoItems = [...todoItems,{ name: itemName, tDate: itemDate }];
     setTodoItems(newTodoItems); 
  };

 //delete item
  const deleteItem = (itemName) => {   
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  
  };  return (
   <TodoItemsContext.Provider 
   value={{ 
    todoItems,
    addNewItem,
    deleteItem 
    }}>
    <center className="todo-container">
      <AppName/>
      <TodoForm />
      <WelcomeMessage/>
      <TodoItems/>
    </center>
   </TodoItemsContext.Provider>
  );
}
export default App;
