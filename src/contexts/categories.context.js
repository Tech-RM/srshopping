import { createContext, useState,useEffect } from "react";
import { getCollectionAndDocuments } from "../utility/firebase/firebase.utility";

export const CategoriesContext=createContext({categoriesMap:{}});


export const CategoriesProvider=({children})=>{
    const [categoriesMap, setCategoriesMap]=useState({});
    useEffect(()=>{
        const getCategoryMap=async()=>{
            const categoryMapResponse=await getCollectionAndDocuments();
            console.log(categoryMapResponse);
            setCategoriesMap(categoryMapResponse);
        }
        getCategoryMap();
    },[]);


    const value={categoriesMap};
    return(<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);
}