import { useState,useEffect,useCallback } from "react";
import { Menu_List } from "../constants";
const useResturantInfo=(id)=>{
    const [restaurantInfo,setRestaurantInfo]=useState([]);
    const [title,setTitle]=useState([]);

    const HandleEffect=useCallback(async ()=>{
        try{
            const damta=await fetch(Menu_List+id);
            const json=await damta.json();
            
            setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
            setTitle(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        }
        catch(err){
            console.log(err);
        }
    },[id])
    useEffect(()=>{HandleEffect()},[HandleEffect]);
    return [restaurantInfo,title];
}
export default useResturantInfo;