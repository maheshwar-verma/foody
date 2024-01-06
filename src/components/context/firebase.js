// Import the functions you need from the SDKs you need
import { useContext,createContext,useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "firebase/auth"
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FirebaseContext=createContext(null);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6GUI44siATmICx_nyyVOlMy9pZGs--Ys",
  authDomain: "foody-auth-c7c67.firebaseapp.com",
  projectId: "foody-auth-c7c67",
  storageBucket: "foody-auth-c7c67.appspot.com",
  messagingSenderId: "323251258812",
  appId: "1:323251258812:web:7ff424bcab1790cba7d7b9",
  measurementId: "G-2L7F76BR2L"
};

export const useFirebase= () => useContext(FirebaseContext);
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const googleProvider=new GoogleAuthProvider();
export const FirebaseProvider=(props)=>{
   const [user,setUser]=useState();
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      if(user){setUser(user);}
      else{
        setUser(null);
      }
    })
  },[])

    const signUpUserWithEmailAndPassword=(email,password)=>{
       createUserWithEmailAndPassword(firebaseAuth,email,password).then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user:"+JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         toast.error(errorMessage);
      });;
    }
    const signInUserWithEmailAndPassword=(email,password)=>{
        signInWithEmailAndPassword(firebaseAuth,email,password).then((userCredential)=>{
           console.log("Logged in");
           const user= JSON.stringify(userCredential.user);
           console.log(user);
        })
        .catch((error)=>{
          toast.error(error.code+error.message);
        })
    }
    const signInWithGoogle=()=>{
      signInWithPopup(firebaseAuth,googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("credential"+credential);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log("token"+token);
        const user = JSON.stringify(result.user);
        console.log("user"+user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    const signOutUser=()=>{
      signOut(firebaseAuth).then(()=>{
        toast("Signed out");
      })
      .catch((err)=>{
        toast.error(err);
      })
    }
    const isLoggedin=user?true:false;
      return <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword,signInUserWithEmailAndPassword,signInWithGoogle,isLoggedin,signOutUser}}>
        {props.children}
      </FirebaseContext.Provider>;
}