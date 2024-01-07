import { createSlice } from "@reduxjs/toolkit";

const citySlice=createSlice({

    name:"city",
    initialState:{
        city:"delhi",
    },
    reducers:{
        setCity:(state,action)=>{
            state.city=action.payload;
        },
    },
});
export const selectCity=({city})=>city;
export const {setCity}=citySlice.actions;
export default citySlice.reducer;