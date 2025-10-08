import styles from "./welcomeMessage.module.css"
import React, { useContext } from "react";
import { TodoItemsContext } from "../../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext)
  if ( todoItems.length === 0)
  {
    return <p className={styles.welcome}>Enjoy your Day</p>
  }
  
}
export default WelcomeMessage
