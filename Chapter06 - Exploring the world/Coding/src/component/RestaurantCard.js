import { CDN_URL, MEDIA_ASSETS_SWIGGY } from "../utils/constants";



//Restaurant card component for each restaurant card
const RestaurantCard = (props) => {
    const {resData} = props;
   const {cloudinaryImageId, name, costForTwo,cuisines,avgRating,sla} = resData;    
    return (     
        <div className='restaurant-card'>
        <img className='rest-image' alt="image" src= {MEDIA_ASSETS_SWIGGY + cloudinaryImageId }/>
        <div className='rest-info'> 
            <div className='name-rating'>        
            <h4 className='rest rest-name'>{name}</h4>     
            <p className='rating'>{avgRating}<span className='star'>★</span></p> 
            </div>   
            <div>
                <p className="rest rest-cost">{costForTwo}</p>
                <p className="rest rest-cuisines" >{cuisines.join(", ")}</p> 
                <div className="rest-time">                    
                <p className="rest-delivery">{sla.slaString}</p>
                {/* <p className="rest-location"><h1  >.</h1></p> */}
                </div>             
            </div>
        </div>
    </div>
    )
}

export default RestaurantCard;