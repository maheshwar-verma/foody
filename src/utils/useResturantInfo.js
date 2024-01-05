import { useState,useEffect } from "react";
import { Menu_List } from "../constants";
const useResturantInfo=(id)=>{
    const [restaurantInfo,setRestaurantInfo]=useState([]);
    const [title,setTitle]=useState([]);

    useEffect(()=>{
        const HandleEffect=async()=>{
            try{
                const damta=await fetch(Menu_List+id);
                const json=await damta.json();
                
                setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
                setTitle(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            }
            catch(err){
                console.log(err);
            }
        }
        
        HandleEffect();
    },[]);
    console.log(title);
    console.log(restaurantInfo);
    return [restaurantInfo,title];
}
export default useResturantInfo;