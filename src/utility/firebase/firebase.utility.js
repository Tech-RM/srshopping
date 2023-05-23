// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider} from "firebase/auth";


    //firebase cloud firestore setup

import {
    getFirestore,
    doc,
    getDoc,
    setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMjP0siosqWvMZZrTXv_Z0uSCdAWoRNN0",
  authDomain: "srshopping-db.firebaseapp.com",
  projectId: "srshopping-db",
  storageBucket: "srshopping-db.appspot.com",
  messagingSenderId: "11834424323",
  appId: "1:11834424323:web:f843ee030c343d3c8de236"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
}
)
export const auth=getAuth();
export const signInWithGooglePopUp=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

export const db=getFirestore();//creating a firebase instance

export const createUserDocumentFromUserAuth= async (userAuth,someOtherFields={})=>{

    //to check an exissting instance of the document
    const userDocRef=doc(db,"users", userAuth.uid);//it creates an user docuent refrence.
    //to get the data related to the above documents
    const userSnapshot=await getDoc(userDocRef);//creates a snapshot of user data.

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            setDoc(userDocRef,{displayName,email,createdAt,...someOtherFields});

        }catch(error){
            console.log("Error creating user instance", error.message);
        }
    }
    return userDocRef;
}

export const createUserDocumentUsingEmailAndPassword= async (email,password)=>{
    if(!email||!password)return;
    return await createUserWithEmailAndPassword(auth,email,password);


}
export const signInUsingEmailAndPassword= async (email,password)=>{
    return await signInWithEmailAndPassword(auth,email,password);

}
