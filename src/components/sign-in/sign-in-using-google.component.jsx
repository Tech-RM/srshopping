import {useEffect} from "react";
import {getRedirectResult} from "firebase/auth";
import {
    auth,
    createUserDocumentFromUserAuth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect} from "../../utility/firebase/firebase.utility";
    
    //sign-in using google popup.
    export const SignInUsingPopup=()=>{
        const handleSignInUsingGooglePopup= async ()=>{
            const response= await signInWithGooglePopUp();
            if(response){
                const userDocRef= await createUserDocumentFromUserAuth(response.user);
                console.log("From SignInUsingGooglePopup",userDocRef);
            }else{
                console.log("Problem getting responce at signInWithGooglePopUp");
                return;
            }
            
            
        }
        return(
            <div>
                <button onClick={handleSignInUsingGooglePopup}>Google SignIn</button>
            </div>
        )
    }
    //sign-in using google redirect

export const SignInUsingRedirect=()=>{
    useEffect(()=>{
        const userResponse=async ()=>{
            const response= await getRedirectResult(auth);
            if(response){
                const userDocRef=await createUserDocumentFromUserAuth(response.user);
                console.log("From SignInUsingGoogleRedirect",userDocRef);
            }
        };
        userResponse();
    },[]);
    
    return(
        <div>
            <p>This is sign in page</p>
            <button onClick={signInWithGoogleRedirect}>Sign In using Google Redirect</button>
        </div>
    )
}