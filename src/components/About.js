
import { Outlet } from "react-router-dom";
function About(){
    return <div className="mb-60">
    <h1 className="text-xl font-semibold m-2 p-2">About Us Page</h1>
    <p className="text-lg font-serif m-2 p-2 break-words"> This is a food ordering app made using React and Redux.</p>
     <p className="text-lg font-serif m-2 p-2 break-words">It uses Swiggy live API to fetch data.</p>
     <p className="text-lg font-serif m-2 p-2 break-words"> Used Tailwind css for styling.</p>
     <h1 className="text-center m-2 p-2 font-sans text-sm">Made by Maheshwar Verma</h1>

    <Outlet/>
    </div>
}
export default About;