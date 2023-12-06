import { useDispatch } from "react-redux";
import { ImgUrl } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import toast from "react-hot-toast";

const ItemList=({items,addButton})=>{
    const dispatch=useDispatch();

    handleAddItem=(item)=>{
        dispatch(addItem(item));
        toast("Item added to Cart",{
            icon: "😋"
        });
    }
    handleRemoveItem=(item)=>{
        dispatch(removeItem(item));
        toast.success("Item removed from cart");
    }
    return <div>
       {items.map((item)=><div
       key={item?.card?.info?.id}
       className="p-2 m-2 border-b-2 text-left md:flex"
       >
        <div className="w-9/12">
      <p className="text-xs">
      {(item?.card?.info?.isVeg || item?.card?.info?.veg)?"🟩 Veg" : "🟥 Non-Veg"}
      </p>
      <div className="py-2">
        
      <span>{item?.card?.info?.name}</span>
      <p className="font-semibold">{  "₹"+((item?.card?.info?.defaultPrice/100)||(item?.card?.info?.price/100))}</p>
      </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
           </div>
           <div className="md:w-3/12 p-4">
           <div className="absolute">

         {addButton ?   <button onClick={()=>handleAddItem(item)} className="bg-green-100 p-1 hover:bg-green-300 text-black hover:scale-90 duration-300 rounded shadow-lg">Add +</button>
            :<button onClick={()=>handleRemoveItem(item)} className="bg-red-300 p-1 hover:bg-red-400 text-black hover:scale-90 duration-300 rounded shadow-lg">Remove -</button>}
           </div>
            <img className="h-20 w-32 md:w-60 md:h-20" src={ImgUrl+item?.card?.info.imageId}/>
           </div>
       </div>
       )}
    </div>
}
export default ItemList;