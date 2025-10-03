import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
    const ButtonName = ["%","C","7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="]
    return(
        
        <div className={styles.buttonContainer}>       
         {
            ButtonName.map((buttonName)=>{
                return(
                <button key={buttonName} className={styles.button} onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
                )
            })
         }
         </div>
       
        );
}

export default ButtonContainer;