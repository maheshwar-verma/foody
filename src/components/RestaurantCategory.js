
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndexFxn})=>{
    
    const HandleClick=()=>{
       setShowIndexFxn();
    }
    return<div className="my-6 mx-auto bg-gray-100 shadow-lg p-4 w-6/12 ">
        <div className=" flex justify-between cursor-pointer hover:scale-105 duration-300"
        onClick={HandleClick}
        >
        <span className="font-semibold text-lg">{data?.title} ({data?.itemCards.length})</span>
        <span>▼</span>
        </div>
        <div>
        {showItems&&<ItemList items={data.itemCards} addButton={true}/>}
        </div>
    </div>
   
}
export default RestaurantCategory;