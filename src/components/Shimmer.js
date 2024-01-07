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
<div className="flex flex-wrap justify-between my-2 p-2 shadow-md">
      <div className="flex">
      <input/>
      <div className="p-1 m-3 h-auto w-20 rounded-md bg-lime-100 hover:bg-lime-300 border-2 border-black"></div>
      </div>
      <div  className="hover:bg-lime-300 hover:scale-95 duration-300 text-xl mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black"></div>
      <div  className="hover:bg-lime-300 hover:scale-95 duration-300 md:text-lg mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-12 text-black"></div>
      <div  className="hover:bg-lime-300 hover:scale-95 duration-300 text-xl mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black"></div>
      <div className="hover:bg-lime-300 duration-300 hover:scale-95 text-sm mt-3 rounded border border-black bg-lime-100 w-20 md:w-32 lg:w-44 h-10 text-black font-semibold"></div>
      </div>
<div className="flex flex-wrap mx-auto justify-between sm:w-auto w-8/12">
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

