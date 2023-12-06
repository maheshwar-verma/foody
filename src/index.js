import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import ProfileClass from "./components/ProfileClass";
import Shimmer from './components/Shimmer';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById("root"));
const Instamart=lazy(()=>import("./components/Instamart"));
const AppLayout=()=>{
   const [userName,setUserName]=useState("");

   // authentication
   useEffect(()=>{
 // Make an Api call for getting userEmail and Password using api call
  const data={
   name: "Maheshwar"
  };
  setUserName(data.name);
   },[]);
    return <>
    <Provider store={appStore}>
    <UserContext.Provider value={{name:userName,setUserName}}>
   

   <Navbar/>
    <Outlet/>
   <Footer/>
   <Toaster/>
   </UserContext.Provider>
   </Provider>
   </>;
} 
const appRouter=createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children: [
         {
            path: "/",
            element: <Body/>,
          },
          {
             path: "/about",
             element: <About/>,
             children: [
               {
                  path: "profile",
                  element: <ProfileClass name={"classss"}/>,
               }
             ]
          },
          {
             path: "/contact",
             element: <Contact/>,
          },
          {
            path: "/restaurant/:id",
            element: <RestaurantDetails/>
          },
          {
            path:"/instamart",
            element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
          },
          {
            path:"/Cart",
            element: <Cart/>
          }
      ],
   },
   
]);

root.render(<RouterProvider router={appRouter}/>);