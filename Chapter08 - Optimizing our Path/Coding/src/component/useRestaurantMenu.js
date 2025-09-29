import { useEffect, useState } from "react";
import { RESTAURANT_MENU,  RESTAURANT_TYPE_KEY, RESTAURANT_ITEM_CATEGORY_KEY } from "../utils/constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
      const { id } = useParams(); 
     const [resInfo, setResInfo] = useState(null);
      const [menuItemData, setItemData] = useState(null); 

      useEffect(() => {   
        fetchData();
      }, [resId]);
    
      async function fetchData() {   
        try{            
        const data = await fetch(RESTAURANT_MENU + id )
        const json = await data.json();   


        const restaturantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY).card
            .info || null; 
        


        const menuItemData = json?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] === RESTAURANT_ITEM_CATEGORY_KEY);

        setResInfo(restaturantData);  
        debugger;
        setItemData(menuItemData);  
        }
        catch(error){
            console.error("Error fetching data:", error);
        }   
      }     
    return { resInfo, menuItemData };
 }; 

 export default useRestaurantMenu