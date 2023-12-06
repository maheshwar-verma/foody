import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { Logo_Url } from "../constants";
function Navbar(){
    const [islogin,setIsLogin]=useState(false);
    const handleLogin=()=>{
        setIsLogin(!islogin);
    }
    const data=useContext(UserContext);
    const[open,setOpen]=useState(false);
    //subscribing to the store using selector
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return (
    <div className="shadow-md bg-amber-200">
         <div className="md:flex items-center justify-between py-4">
           <div className="items-center flex cursor-pointer">
           <Link to='/'>
       <img className="h-16 px-2" src={Logo_Url} alt='logo'/>
         </Link>
           </div>
           <div className="absolute cursor-pointer md:hidden bg-grey-800 z-[10] right-8 top-6">
           <img onClick={()=>{setOpen(!open)}} className="h-10" src={!open?"https://www.freeiconspng.com/uploads/menu-icon-28.png":"https://www.freeiconspng.com/uploads/close-icon-47.png"}/>
           
           </div>
           <ul className={`${open?"visible opacity-100":"hidden"} md:opacity-100 mr-5 opacity-0 md:visible md:flex md:space-x-2 md:items-center md:pb-0 pb-4 static bg-amber-200 md:z-auto z-[1] left-0 w-full md:w-auto transition-all duration-500 ease-in`}>

                     <li className="md:ml-8 my-3 mx-3 md:mx-1 text-xl">
                        <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500">Home</Link>
                    </li>
                     <li className="md:ml-8 my-3 mx-3 text-xl">
                        <Link to="/about" className="text-gray-800 hover:text-gray-400 duration-500">About</Link>
                    </li>
                     <li className="md:ml-8 my-3 mx-3 text-xl">
                        <Link to="/Contact" className="text-gray-800 hover:text-gray-400 duration-500">Contact</Link>
                    </li>
                     <li className="md:ml-8 my-3 mx-3 text-xl">
                        <Link to="/Instamart" className="text-gray-800 hover:text-gray-400 duration-500">Instamart</Link>
                    </li>
                     <li className="md:ml-8 my-3 mx-3 text-xl">
                        <Link to="/Cart" className="text-gray-800 hover:text-gray-400 duration-500">Cart🛒
                        {cartItems.length!=0&&<span>{cartItems.length}</span>}</Link>
                    </li>
                    {/* <li className="md:ml-8 my-3 mx-3 text-xl">
                    <Link to="/" className="text-sm text-gray-800 hover:text-gray-400 duration-500">{data.name}</Link>
                </li> */}
               
            
            <button onClick={handleLogin} className="bg-gray-800 hover:bg-gray-500 duration-500 rounded text-red-500 mx-3 py-2 px-5 font-[poppins] ease-in">{islogin?"Log out":"Login"}</button>
           </ul>
           
         </div>
    </div>)
}
export default Navbar;