import { createSlice } from "@reduxjs/toolkit";

const initialState={
    address:JSON.parse(localStorage.getItem("address"))|| {
        latitude: "26.144138",
        longitude: "85.398744",
    },
};
const addressSlice=createSlice({
    name:"address",
    initialState,
    reducers:{
        setAddress:(state,action)=>{
            state.address=action.payload;
            localStorage.setItem("address",JSON.stringify(state.address));
        },
    },
});
export const selectAddress=({address})=>address;
export const {setAddress}=addressSlice.actions;
export default addressSlice.reducer;