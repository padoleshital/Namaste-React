import React from "react";
import styles from './Item.module.css';

const Item = ({FoodItems, bought }) =>{
    const handleBuyButtonClicked = (event) =>{
        console.log(event)
        console.log(`${FoodItems} item being bought`)
    };
    return (
      //Module CSS and bootstrap CSS both are used here
      <li key={FoodItems} className={`list-group-item ${styles.kgBg} ${bought && "active"}`}>
        <span className={styles.kgSpan}>{FoodItems}</span>
        <button
          className={`btn btn-info ${styles.button}`}
          onClick={(event) =>handleBuyButtonClicked(event)}
        //   onClick={() => console.log(`${FoodItems} item being bought`)}
        >
          Buy
        </button>
      </li>
    );
}
export default Item;