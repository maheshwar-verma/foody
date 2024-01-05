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
                
                for (let index = 0; index < json?.data?.cards.length; index++) {
                    
                    if(json?.data?.cards[index]?.card?.card?.info){
                        setRestaurantInfo(json?.data?.cards[index]?.card?.card?.info);
                       // return;
                    }
                    if(json?.data?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards){
                        setTitle(json?.data?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
                        //  return;
                    }
                    
                }
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