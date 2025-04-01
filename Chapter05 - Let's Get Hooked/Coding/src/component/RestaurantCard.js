import { CDN_URL } from "../utils/constants";


//Restaurant card component for each restaurant card
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, costForTwoString,cuisines,avgRating,maxDeliveryTime} = resData?.info;
   
    return(     
        <div className='restaurant-card'>
        <img className='rest-image' alt="chicken-biryani" src={CDN_URL + cloudinaryImageId }/>
        <div className='rest-info'> 
            <div className='name-rating'>        
            <h4 className='rest-name'>{name}</h4>     
            <p className='rating'>{avgRating}<span className='star'>★</span></p>          
            </div>   
        <p>{costForTwoString}</p>
            <p>{cuisines.join(", ")}</p>           
            <p>{maxDeliveryTime} min</p>
        </div>
    </div>
    )
}

export default RestaurantCard;