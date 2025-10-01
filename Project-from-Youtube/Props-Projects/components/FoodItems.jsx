import Item from "./Item";

const  FoodItems = ({items}) => {
    
    return (              
        <ul className="list-group KgBg">       
          {
            items.map((item) =>(
            <Item key={item} FoodItems = {item}></Item> 
          ))}            
        </ul>
    );
} 

export default FoodItems;


