import React from "react";
import styles from './Item.module.css';

const Item = ({FoodItems}) =>{
    return (
        //Module CSS and bootstrap CSS both are used here
        <li key={FoodItems}  className={`list-group-item ${styles.kgBg}`} >
            
            <span className={styles.kgSpan}>{FoodItems}</span>
        </li>
    );
}
export default Item;