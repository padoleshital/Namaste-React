import React from "react";
import { RESTAURANT_MENU, RESTATURANT_DISH_IMAGE, RESTAURANT_TYPE_KEY, RESTAURANT_ITEM_CATEGORY_KEY } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItemData, setItemData] = useState(null); 
  const { id } = useParams(); 


  useEffect(() => {   
    fetchData();
  }, []);

  async function fetchData() {     
    const data = await fetch(RESTAURANT_MENU + id )
    const json = await data.json();   
    const restaturantData =  json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY).card.info || null; ;  
    setResInfo(restaturantData);  
    const menuItemData = json?.data?.cards
      ?.find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((x) => x.card?.card)
       ?.filter(x => x['@type'] == RESTAURANT_ITEM_CATEGORY_KEY );
       setItemData(menuItemData);    
    }
  
  if (resInfo === null) return <Shimmer />;
   return (
     <div className="nav-path">
       <h1>{resInfo.name} </h1>
       <div className="card-bg">
         <div className="res-card">
           <div className="card-info">
             <div className="res-name">
               <span className="res-star">
                 <svg
                   width="20"
                   height="20"
                   viewBox="0 0 20 20"
                   aria-hidden="true"
                 >
                   <defs>
                     <linearGradient
                       id="gradient"
                       x1="10"
                       y1="1"
                       x2="10"
                       y2="19"
                       gradientUnits="userSpaceOnUse"
                     >
                       <stop stopColor="#21973B" />
                       <stop offset="1" stopColor="#128540" />
                     </linearGradient>
                   </defs>
                   <circle cx="10" cy="10" r="9" fill="url(#gradient)" />
                   <path
                     d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                     fill="white"
                   />
                 </svg>
               </span>
               {resInfo.avgRating} ({resInfo.totalRatingsString}) <span>•</span>
               {resInfo.costForTwoMessage}
             </div>

             <h5 className="res-cuisines">{resInfo.cuisines.join(",")}</h5>
             <div className="res-timings">
               <div className="res-timings1">
                 <div className="dot-css"></div>
                 <div className="dot-line"></div>
                 <div className="dot-css"></div>
               </div>
             </div>
             <div className="outlet-text">
               <h5><span>Outlet</span> {resInfo.locality}</h5>
               <h5>{resInfo.sla.slaString}</h5>
             </div>
           </div>
           <hr className="hr-line"></hr>
         </div>       
      
          { menuItemData?.map((item) => (       
              <div  key={item.categoryId} className="menu-offer">
              <h4>{item.title} ({item.itemCards.length})</h4>   
                
              <ul>
              {item.itemCards.map((restName) =>           
              <li key={restName.card.info.id}>                
                <div className="dish-badge">
                 {restName.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                  <div className="non-veg-badge-container">
                    <span className="triangle" />
                  </div>
                ) : (
                  <div className="veg">
                    <div className="veg-badge-container">
                      <span className="circle" />
                    </div>
                  </div>
                )}
                </div>
                <div className="dish-info">
                <div className="dish-name">{restName.card.info.name}</div>
                <div className="dish-card dish-name">&#8377;{restName.card.info.price ? restName.card.info.price/100 : restName.card.info.defaultPrice/100}</div>  
                <div className="dish-rating">
                {
                restName.card.info.ratings.aggregatedRating.rating && (<p>{restName.card.info.ratings.aggregatedRating.rating}</p>
                )}
                {restName.card.info.ratings.aggregatedRating.ratingCountV2 && (
                <span>({restName.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                )} 
                  </div>
                  <p className="dish-description">{restName.card.info.description}</p>                
              
                </div>
                <div className="add-cart">
                {restName.card.info.imageId &&
                  <div className="dish-image">
                    <img src={RESTATURANT_DISH_IMAGE + restName.card.info.imageId}  alt="recommended" ></img>
                    <button className="btn-add">ADD</button>
                    </div>
                } 
                </div>
                
                <hr></hr>    
              </li>
               )}            
             
            </ul> 
            </div>
          ))};
       </div>
     </div>
   );
};
export default RestaurantMenu;
