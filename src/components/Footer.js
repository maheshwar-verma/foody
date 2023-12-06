import { Logo_Url } from "../constants";

function Footer(){
    return <div className="bg-amber-200 shadow-lg w-auto text-xs sm:text-base">
        <div className="flex flex-wrap w-10/12 mx-auto h-auto items-center justify-around">
             <div className="w-[40%] md:w-[20%] p-1">
                <div className="flex justify-start">
                    <img className="h-10 sm:h-14" src={Logo_Url} alt="logo"/>
                    <span className="font-semibold text p-2">Foody's Villa</span>
                </div>
                <p>Copyright @2023. Foody's Villa Incl.All rights reserved</p>
             </div>
             <div className="w-[40%] md:w-[20%] p-2">
                    <ul>
                        <li className="font-semibold m-2">Company</li>
                        <li className="m-2">About Us</li>
                        <li className="m-2">Instamart</li>
                        <li className="m-2">Carrer</li>
                    </ul>
             </div>
             <div className="w-[40%] md:w-[20%] p-2" >
                     <ul className="m-1 p-1">
                        <li className="m-2 font-semibold">Legal</li>
                        <li className="m-2">Terms & Conditions</li>
                        <li className="m-2">Privacy Policy</li>
                        <li className="m-2">Cookie Policy</li>
                     </ul>
             </div>

             <div className="w-[40%] md:w-[20%] p-2" >
                     <ul className="m-1 p-1">
                     <li className='font-semibold m-2'>Contact Us</li>
                     <li className='m-2'>Muzaffarpur,Bihar-842002</li>
                     <li className='m-2'>9876543210</li>
                     <li className='m-2 break-words'>maheshwarverma14340@gmail.com</li>
                     </ul>
             </div>
             
        </div>
    </div>
}
export default Footer;