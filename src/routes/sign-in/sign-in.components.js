import {createUserDocumentFromGoogleAuth,signInWithGooglePopUp} from "../../utility/firebase/firebase.utility";

const SignIn=()=>{
    const handleSignInUsingGooglePopup= async ()=>{
        const response= await signInWithGooglePopUp();
        const userDocRef= await createUserDocumentFromGoogleAuth(response.user);

    }
    return(
        <div>
            <p>This is sign in page</p>
            <button onClick={handleSignInUsingGooglePopup}>Sign In using Google Popup</button>
        </div>
    )
}
export default SignIn;