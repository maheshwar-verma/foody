import { useState,useEffect } from "react"
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";
export default function Example() {

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const firebase=useFirebase();
 console.log(firebase);
 const navigate=useNavigate();
 console.log(firebase);

 useEffect(()=>{
    if(firebase.isLoggedin){
      navigate("/");
    }
 },[firebase,navigate]);
 const handleSignIn=async (e)=>{
  e.preventDefault();
  console.log("signing in user");
const result= await firebase.signInUserWithEmailAndPassword(email,password);
console.log("signed up user"+result);
}

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-16 w-auto"
              src="https://tse3.mm.bing.net/th?id=OIP.z0g2IWh4iGbk8TECOC_6lgHaHa&pid=Api&P=0&h=180"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
             <div onClick={firebase.signInWithGoogle} className="hover:bg-amber-200 cursor-pointer flex justify-between m-4 p-4 border border-black">
             <button className="items-center justify-between text-center">Sign In With Google</button>
             <img alt="google" className="w-[2.5rem]" src="https://tse3.mm.bing.net/th?id=OIP.yL98CHypeT0JQEKEVwf_rAHaHa&pid=Api&P=0&h=180"/>
             </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  