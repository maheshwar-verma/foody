import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantInfo from "../utils/useResturantInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantDetails = () => {
     const { id } = useParams();
     //console.log(id);
     const [restaurantInfo, title] = useResturantInfo(id);
  //   const newTitle=title?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const [showIndex,setShowIndex]=useState(null);
 
     // console.log(id);
     // console.log(restaurantInfo);
    //  console.log(title);
     const categories=title.filter((c)=>
         c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
     //console.log(categories);
     console.log(restaurantInfo);
     console.log(title);
     return (restaurantInfo.length===0)?<Shimmer/>: (
          <div className="text-center">
          <div className="flex w-8/12 sm:w-6/12 mx-auto h-auto justify-between border-dashed border-b-2">
           <div className="m-3 p-3 text-start">
               <h1 className="my-4 font-bold text-2xl">{restaurantInfo.name}</h1>
              <p className=" text-xs">{restaurantInfo.areaName}</p>
               <p className="text-xs">{restaurantInfo.cuisines}</p>
               <p className="text-lg my-4 font-semibold">{restaurantInfo.costForTwoMessage} 🍽</p>
              
               </div>
               <div className="my-auto">
              <p className="border border-gray-400 rounded-lg text-lg">{restaurantInfo.avgRating}⭐</p>
              <p className="border border-gray-400 rounded-lg text-xs mt-1 p-2">{restaurantInfo.totalRatingsString}</p>
               </div>
          </div>
               {/* Category Accordians */}
               {categories.map((category,index)=>
               <RestaurantCategory 
               key={category?.card?.card?.title} 
               data={category?.card?.card}
               showItems={index===showIndex?true:false}
               setShowIndexFxn={()=>showIndex!=index?setShowIndex(index):setShowIndex(null)}     
               />
               )}
          </div>
     );
}
export default RestaurantDetails;
