import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState: {
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // we are mutating the state here =>directly changing the state
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const itemId=action.payload.card.info.id;
            const index=state.items.findIndex((x)=>x.card.info.id===itemId);
            state.items.splice(index,1);
            
        },
        clearCart:(state)=>{
           state.items.length=0; //[]
        },
    }
});
 //cartSlice we recieve a returned object in this form 
//  {
//     actions:{
//         addItem,
//         removeItem,
//         clearCart,
//     },
//     reducer
//  }  we have to export these
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;