import { useEffect, useState } from "react";

const IsOnline=()=>{
  const [isOn,setIsOn]=useState(true);
  const handleOnline=()=>{setIsOn(true)};
  const handleOffline=()=>{setIsOn(false)};
  useEffect(()=>{
    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);

    return ()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    }
  },[]);
  

  return isOn;
}
export default IsOnline;