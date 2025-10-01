import React from "react";
import styles from "./Display.module.css";
import ButtonContainer from "./ButtonContainer";

const Display = () =>{
    return(
        <div>
            <input type="text" className={styles.display}></input>
            <ButtonContainer></ButtonContainer>
           
       </div>
    );
}
export default Display;