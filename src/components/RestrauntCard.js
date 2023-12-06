import { ImgUrl } from "../constants";
import {Link} from "react-router-dom";

const RestrauntCard=({cloudinaryImageId,name,cuisines,avgRating,id,locality})=>{
  //console.log(id);
    return (
      <div className='p-2 bg-gray-100 hover:bg-amber-200 hover:scale-90 shadow-lg  m-2 duration-300'>
         
        <Link to={"/restaurant/"+id}><img className="h-48 w-48 rounded-lg" alt='food' src={ImgUrl+cloudinaryImageId}/></Link>
        <Link to={"/restaurant/"+id}><h5 className="w-48 font-bold text-lg">{name}</h5></Link>
        <h2 className="w-48">{cuisines.join(", ")}</h2>
        <h3 className="py-1">{avgRating}⭐</h3>
        <h3 className="font-serif">{locality}</h3>
      </div>
    );
  }
export default RestrauntCard;