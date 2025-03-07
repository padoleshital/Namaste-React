import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

// Body component for body section It contains all the restaurant cards:
const Body = () =>{
    const [listOfRestarants, setListOfRestarants] = useState(restaurantList);


    return (
      <div className="Body">
        <div className="top-Rated">
          <button
            className="filter-btn"
            onClick = {() => {
              const filterdList = listOfRestarants.filter((res)=>
                res.data.avgRating > 4
              );
              setListOfRestarants(filterdList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="restaurant-container">
          {listOfRestarants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.key} resData={restaurant} />
          ))}
        </div>
      </div>
    );
}

export default Body;