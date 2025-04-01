import {shimmer_card_unit} from "../utils/constants"


const ShimmerCard= () => {
    return (      
        <div className="shimmer-card">
            <div className="shimmer-image "></div>
            <div className="shimmer-text "></div>
            <div className="shimmer-details "></div>
        </div> 
        );
}

const Shimmer = () =>
    {
        const shimCard = Array(shimmer_card_unit).fill(0);
        return (
            <div className="shimmer-container">
                {shimCard.map((_, index) => (
                    <ShimmerCard key={index}/>
                ))}
            </div>
        );
    };

export default Shimmer;