
import { useState } from "react";
import { signInUsingEmailAndPassword } from "../../utility/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignInUsingPopup } from "./sign-in-using-google.component";

import { Buttons, SignInContainer, SignInH2 } from "./sign-in-form.styles";

const initialState={
    "email":"",
    "password":""
}

const SIgnInUsingEmailAndPassword=()=>{
    
    const [formFields,setFormFields]=useState(initialState); 
    // Here useState is the function for using state in a functional component
    //formFields is the state and setFormFields is the setting function to update the values of the decleared state. 
    // where useState takes an parameter "initialState" as an inital value.
    const {email,password}=formFields; // this is value distructuring... as email=formFields.email & password=formFields.password

    const onInputChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    }


    const handleSignInFormSubmit= async (event)=>{
        event.preventDefault();
        if(!email||!password)return;
        try{
            await signInUsingEmailAndPassword(email,password);

        }catch(error){
            switch(error.code) {
                case "auth/user-not-found":
                    alert("Ohhh ho!! No such user found on our system");
                    console.log("User authentication failed at signInUsingEmailAndPassword for : "+error.code);
                break;
                case "auth/wrong-password":
                    alert("Wrong Email or Password!!!");
                    console.log("User authentication failed at signInUsingEmailAndPassword for : "+error.code);
                break;
                default:
                    console.log("User authentication failed at signInUsingEmailAndPassword",error);
              }
        }

    }
    return(
        <SignInContainer>
            <SignInH2>Already have an account?</SignInH2>
            <span>Sign-In using your email and password</span>
            <form onSubmit={handleSignInFormSubmit}>
                <FormInput 
                label={"Email : "}
                type="text"
                name="email"
                value={email}
                onChange={onInputChange} 
                required />

                <FormInput 
                label={"Password : "} 
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
                required />
                <Buttons>
                    <Button type="submit">Sign In</Button>
                    <SignInUsingPopup/>
                </Buttons>
            </form>
        </SignInContainer>
    )
}

export default SIgnInUsingEmailAndPassword;