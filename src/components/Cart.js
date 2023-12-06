import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";
import EmptyCart from "./EmptyCart";
const Cart= ()=>{
    const dispatch=useDispatch();
   const handleClearCart=()=>{
           dispatch(clearCart());
           toast("Cart is Cleared",{
            icon:"👀"
           });
    }
    const handleOrder=()=>{
      dispatch(clearCart());
      toast("Hurray!!!! Your order Placed",{
        icon: "🤩"
      });
    }
    const cartItems=useSelector((store)=>store.cart.items);
   // console.log(cartItems);
    let amount=0;
    cartItems.map((item)=>amount+=(item.card.info.price/100 || item?.card?.info?.defaultPrice/100));
    console.log(amount);
    return <div className="text-center p-4 m-4">
        {cartItems!=0&&<h1 className="font-bold text-2xl">Cart</h1>}
        <div className="w-6/12 m-auto">
        <ItemList items={cartItems} addButton={false}/>
        
        </div>
        {cartItems.length!=0?<div className="md:flex justify-between text-center w-6/12 m-auto">
          <button onClick={handleClearCart} className="text-xl rounded-md hover:bg-lime-500 duration-300 m-2 py-2 bg-lime-100 text-black border border-black">Clear Cart</button>
            <h1 className="font-bold text-xl md:mt-4">Total Amount = ₹ {amount}</h1>
           <button onClick={handleOrder} className="text-xl rounded-md hover:bg-lime-500 duration-300 m-2 bg-lime-100 text-black border border-black">Place Order</button>
        </div>:<EmptyCart/>}
    </div>
}
export default Cart;