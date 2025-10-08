import styles from "./welcomeMessage.module.css"
import { todoItemsContext } from "../store/todo-items-store.jsx";
import { useContext } from "react"

const WelcomeMessage = () =>{
const  {todoItems} = useContext(todoItemsContext);
// If there are no todo items, show message
if(todoItems === 0 )
    {
    return <p className={styles.welcome}>Enjoy your Day</p>
    }
    
  // If there are tasks, show nothing (or return null)
  return null;
    
}
export default WelcomeMessage;