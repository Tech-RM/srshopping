import {useEffect} from "react";
import {getRedirectResult} from "firebase/auth";
import {
    auth,
    createUserDocumentFromUserAuth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect} from "../../utility/firebase/firebase.utility";

    import Button,{BUTTON_TYPPE_CLASSES} from "../button/button.component";
    
    //sign-in using google popup.
    export const SignInUsingPopup=()=>{
        const handleSignInUsingGooglePopup= async ()=>{
        await signInWithGooglePopUp();     
        }
        return(
                <Button type="button" buttonType={BUTTON_TYPPE_CLASSES.google} onClick={handleSignInUsingGooglePopup}>Google SignIn</Button>
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
            <Button buttonType={BUTTON_TYPPE_CLASSES.google} onClick={signInWithGoogleRedirect}>Sign In using Google Redirect</Button>
        </div>
    )
}