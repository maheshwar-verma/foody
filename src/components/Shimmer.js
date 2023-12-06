import React from "react";
const ShimmerItem=()=>{
    return <div className="w-48 h-56 rounded-xl border my-12 border-gray-100">
        <div className="h-48 w-48 bg-gray-300"></div>
        <div className="h-6 my-3 rounded-lg bg-gray-100"></div>
        <div className="h-6 my-3 rounded-lg bg-gray-100"></div>
        <div className="h-6 my-3 rounded-lg bg-gray-100"></div>
    </div>
}

const Shimmer=()=> <>
<div className="flex flex-wrap mx-auto justify-between">
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
    <ShimmerItem/>
</div>
</>;
export default Shimmer;

