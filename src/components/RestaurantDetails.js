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
     // return (!restaurantInfo) ? <Shimmer /> : <div className="menu">
     //      <div className="flex flex-wrap">

     //           <img className="p-2" style={{ width: "200px" }} alt="food.img" src={ImgUrl + restaurantInfo.cloudinaryImageId} />
     //           <ul>

     //                <li className="text-3xl font-bold">{restaurantInfo.name}</li>
     //                <li className="text-xl font-semibold">{restaurantInfo.avgRating + "⭐"}</li>
     //                <li className="text-xl">{restaurantInfo.areaName}</li>
     //                <li className="text-lg font-medium">{restaurantInfo.locality}</li>
     //           </ul>

     //      </div>
     //      {title.slice(1).map((timtle, index) => {

     //           if (timtle?.card?.card?.itemCards === undefined) {
     //                return null;
     //           }
     //           const uniqueKey = `${index}-${timtle.card.card.title}`;
     //           return (<div className="flex flex-wrap m-8" key={uniqueKey}>
     //                <ul className="text-lg bg-amber-200" key={index}>{timtle?.card?.card?.title}</ul>
     //                {(timtle?.card?.card?.itemCards).map((itemss) => {
     //                     const itemKey = `${uniqueKey}-${itemss?.card?.info?.name}`;
     //                     return <li className="m-2" key={itemKey}>{itemss?.card?.info?.name}</li>;

     //                })}
     //           </div>)


     //      })
     //      }
     // </div>;
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
          <div className="flex w-6/12 mx-auto h-auto justify-between border-dashed border-b-2">

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
