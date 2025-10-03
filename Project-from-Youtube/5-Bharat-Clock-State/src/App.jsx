import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [ calValue,setCalValue] = useState("");

const calculatorResult = (buttonText) => 
 {
  if(buttonText === "C")
  {
    setCalValue("")
  }
  else if(buttonText === "=")
  {
    const result = eval(calValue);
   setCalValue(result);
  }else{

    const newDisplayValue = calValue + buttonText;
    setCalValue(newDisplayValue);

  }
 }



  return (    
    <div className={styles.calculator}>     
      <Display displayValue={calValue} /> 
      <ButtonContainer onButtonClick = {calculatorResult} ></ButtonContainer>
       
    </div>
  
  );
}

export default App;
