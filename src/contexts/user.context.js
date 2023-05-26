import { useState,createContext, useEffect } from "react";
import { onAuthStateChangedListner} from "../utility/firebase/firebase.utility";
import { createUserDocumentFromUserAuth } from "../utility/firebase/firebase.utility";


//the actual value we want to access

export const UserContext= createContext({

    currentUser: null,
    setCurrentUser: ()=>null,
});


export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};

    const UserUpdateCallback=(user)=>{
        if(user){
            createUserDocumentFromUserAuth(user);
        }
        setCurrentUser(user);
        }

   useEffect(()=>{
    const unsubscribe=onAuthStateChangedListner(UserUpdateCallback);
    return unsubscribe},[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}