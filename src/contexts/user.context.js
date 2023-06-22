import {createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListner} from "../utility/firebase/firebase.utility";
import { createUserDocumentFromUserAuth } from "../utility/firebase/firebase.utility";
import { createAction } from "../utility/reducer/reducer.utility";


//the actual value we want to access

export const UserContext= createContext({
    currentUser: null,
    setCurrentUser: ()=>null,
});

const USER_ACTION_TYPES={
    SET_CURRENT_USER:'SET_CURRENT_USER',
}

const userReducer=(state,action)=>{
    const{type,payload}=action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:return({...state, currentUser:payload});
        default: throw new console.error(`Unhandeled type ${type} received from dispatch.`);
    }
}

const INITIAL_VALUE={
    currentUser:null,
}


export const UserProvider=({children})=>{
    const [state,dispatch]=useReducer(userReducer,INITIAL_VALUE);
    const {currentUser}=state;
    const setCurrentUser=(user)=>dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
    const value={currentUser,setCurrentUser};

    const UserUpdateCallback=(user)=>{
        if(user){
            createUserDocumentFromUserAuth(user);
        }
        setCurrentUser(user);
        }

   useEffect(()=>{
    const unsubscribe=onAuthStateChangedListner(UserUpdateCallback);
    return unsubscribe});

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}