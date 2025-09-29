import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import {LIVE_URL_OF_SWIGGY} from "../utils/constants"
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";


// Body component for body section It contains all the restaurant cards:
const Body = () =>{
   // Local State Variable - Super powerful variable
  const [searchInput, setSearchInput] = useState("");  
  const [listOfRestaurant , setListOfRestaurants] = useState([]);
  const [filtredRestaurant , setFilterdRestaurant] = useState([]);

  useEffect(() => {
    fetchData();   
  }, []);

  async function fetchData(){     
      const data =  await fetch(LIVE_URL_OF_SWIGGY);
      const json = await data.json();  
      //used optional Chanining
      const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
       setListOfRestaurants(resData);
       setFilterdRestaurant(resData); 
    };
   // debugger;
   //state variables=
  return listOfRestaurant.length === 0 ? (    
    <Shimmer/>
  ) :
    (
    <>
        <div className="Body">   
          <div className="search-container">          
            <i className="fas fa-search"></i> <input type="text" className="search-bar" value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}/>
              <button className='button' type="submit" onClick={() =>{                
                const filteredrest = listOfRestaurant.filter((res)=>res?.info.name.toLowerCase().includes(searchInput.toLowerCase()) )
                setFilterdRestaurant(filteredrest);                         
              }}>Search</button>                    
          </div>     

        <div className="restaurant-container">   
         {filtredRestaurant.map((restaurant)  => (       
           <Link to={"/restaurant/"+ restaurant?.info.id} key={restaurant?.info.id}><RestaurantCard  resData={restaurant?.info} /></Link> 
          ))}  
        </div>
      </div>
    </>
  );
};

export default Body;