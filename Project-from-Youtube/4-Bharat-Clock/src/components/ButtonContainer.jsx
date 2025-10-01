import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
    const ButtonName = ["%", "CE","C","7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"]
    return(
        <div className={styles.buttonContainer}>       
         {
            ButtonName.map((buttonName)=>{
                return(
                <button className={styles.button}>{buttonName}</button>
                )
            })
         }
         </div>
       
        );
}

export default ButtonContainer;