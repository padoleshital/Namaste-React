import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import styles from "./App.module.css";

function App() {
  return (    
    <div className={styles.calculator}>     
      <Display />   
       
    </div>
  
  );
}

export default App;
