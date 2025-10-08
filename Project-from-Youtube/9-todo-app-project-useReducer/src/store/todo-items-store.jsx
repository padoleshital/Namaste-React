
import  { createContext}from "react"
import { useState, useReducer } from "react";
//store context declare
export const todoItemsContext = createContext({
     todoItems :[],
     addNewItem: () =>{},
     deleteItem:() => {},
});
// reducer function 
const todoItemReducer = (currTodItems,action) =>{
 
 let newTodoItems = currTodItems;
  if(action.type ==="NEW_ITEM")
  {
    return [...currTodItems,
      { name: action.payload.itemName, tDate:action.payload.itemDate },
   ]; 
       
  } else if(action.type ==="DELETE_ITEM")
  {
    newTodoItems = currTodItems.filter((item)=> item.name !== action.payload.itemName);
  }
  return [newTodoItems];
}
   
//component
const TodoItemsContextProvider =({children}) =>{

    const [todoItems,dispatchTodoItems] = useReducer(todoItemReducer,[]);
 
      const addNewItem =(itemName,itemDate) =>{
    const newItemAction ={
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemDate
      }
    }
    dispatchTodoItems(newItemAction);
  };

  const deleteItem =(todoItemName) =>{
    const deleteItemAction = {
      type:"DELETE_ITEM",
      payload:{
        itemName :todoItemName
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <todoItemsContext.Provider value={{
        todoItems,
      addNewItem,
      deleteItem
    }}>{children}</todoItemsContext.Provider>

  )

}
export default TodoItemsContextProvider