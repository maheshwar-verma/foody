import RestrauntCard from "./RestrauntCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import isOnline from "../utils/useIsOnline";
import UserContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "./context/firebase";
function Body(){
    const [inputText,setInputText]=useState("");
    const [AllRestraunts,setAllRestraunts]=useState([]);
    const [filterRestraunt,setFilterRestraunt]=useState([]);
    const firebase=useFirebase();
    const navigate=useNavigate();
    useEffect(()=>{
         if (!firebase.isLoggedin) {
            navigate("/signin");
         }
    },[firebase,navigate]);
    function HandleClick(){
      console.log(AllRestraunts);
      return setFilterRestraunt(AllRestraunts.filter((EachRestra)=>EachRestra?.info?.name.toLowerCase().includes(inputText.toLowerCase())));
    }
   const handleRating=()=>{
      setFilterRestraunt(AllRestraunts.filter((eachRestra)=>eachRestra?.info?.avgRating>=4));
    }
   const  handleVeg=()=>{
      setFilterRestraunt(AllRestraunts.filter((eachRestra)=>eachRestra?.info?.veg===true||eachRestra.info.isVeg===true));
    }
    const handlePizza=()=>{
      setFilterRestraunt(AllRestraunts.filter((eachRestra)=>eachRestra?.info?.cuisines.includes("Pizzas")));
    }
    const handleAllRestaurant=()=>{
      setFilterRestraunt(AllRestraunts);
    }
    useEffect(()=>
    {
      const GetRestraunts=async()=>{
         try {  
            const data= await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D26.144138%26lng%3D85.398744%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
            console.log(data);
           console.log("data");
            const Json=await data.json();
            console.log(Json);
            console.log("json");
            for (let index = 0; index < Json?.data?.cards.length; index++) {
               if(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
                 setAllRestraunts(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                 setFilterRestraunt(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                 return;
               }
               
            }
         
         }
            catch(err){
               console.log(err);
            }
      }
      GetRestraunts()},[]);
    console.log("render");
 // not render component (early return)
 const is_Online=isOnline();
 if(!is_Online){
    return <h1 className="text-3xl font-extrabold m-4">Oops you are offline!!!!!</h1>;
 }
    if(!AllRestraunts) return null;

//    async function GetRestraunts(){
// try {  
//    const data= await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D26.144138%26lng%3D85.398744%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
//    console.log(data);
//   console.log("data");
//    const Json=await data.json();
//    console.log(Json);
//    console.log("json");
//    for (let index = 0; index < Json?.data?.cards.length; index++) {
//       if(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
//         setAllRestraunts(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilterRestraunt(Json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         return;
//       }
      
//    }

// }
//    catch(err){
//       console.log(err);
//    }
//   }
  //const {userName,setUserName}=useContext(UserContext);
    console.log(AllRestraunts);
  return AllRestraunts.length===0?<Shimmer/>:<>
  <div className="mx-auto w-full bg-gray-200 ">
  <div className="flex flex-wrap justify-between my-2 p-2 shadow-md">
      <div className="">
      <input
      className="p-2 bg-white-50 m-2 border-2 focus:bg-lime-100" 
      type="text"
      placeholder="search"  
      value={inputText}
      onChange={(e)=>{setInputText(e.target.value);}}
      />
      <button className="p-1 rounded-md bg-lime-100 hover:bg-lime-300 border-2 border-black" onClick={HandleClick}>Search</button>
      </div>
      <button onClick={handleVeg} className="hover:bg-lime-300 hover:scale-95 duration-300 text-xl mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black">Veg</button>
      <button onClick={handleRating} className="hover:bg-lime-300 hover:scale-95 duration-300 md:text-lg mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-12 text-black">Rating 4.0⭐</button>
      <button onClick={handlePizza} className="hover:bg-lime-300 hover:scale-95 duration-300 text-xl mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black">Pizza</button>
      <button onClick={handleAllRestaurant} className="hover:bg-lime-300 duration-300 hover:scale-95 text-sm mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black font-semibold">All Resturant</button>
      </div>
      {/* <div>
         <label>Username:</label>
         <input className="border border-black" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      </div> */}
    <div className='flex flex-wrap justify-start'>
    {filterRestraunt.length===0 && <a href="/"><h1>No Restraunt matching your filter</h1></a>}
     {filterRestraunt.map((restra)=><RestrauntCard key={restra.info.id} {...restra.info}/> )}
     
      </div>
      </div>

      </>;
  }
  export default Body;