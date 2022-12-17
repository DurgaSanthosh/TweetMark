// import React from "react";
// import { useState, useEffect} from "react";
// import { BaseContext } from "./baseContext";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";


import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase";

//export const AuthContextProvider = (props) =>{
  
   // const app = firebase.app()
  //  console.log(app)
  //  const [user, setUser] = useState(null)
  
//
  //  useEffect(()=>{
  //      firebase.auth().onAuthStateChanged((userDetails) =>{
    //        console.log(userDetails)
     //      setUser(userDetails) 
       //    if (userDetails?.uid)   window.location.assign('/feed')
     
    //    })
  //  },[])

    // console.log(user)
    // return(
    //     <AuthContext.Provider value={user}>
    //         {props.children}
    //     </AuthContext.Provider>
   // )

   export const AuthContext = createContext();

   export const AuthContextProvider = ({ children }) => {
     const auth = getAuth(app.app);
     const [user, loading, error] = useAuthState(auth);
     
    console.log(user)
   
     
   
     return(
         <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
     )
   };
   

