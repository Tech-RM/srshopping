import { useState } from "react";
import { createUserDocumentUsingEmailAndPassword,
         createUserDocumentFromUserAuth} from "../../utility/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import './sign-up-form.styles.scss';



const initialState={
    "displayName" : '',
    "email":'',
    "password":'',
    "confirmPassword":''
}

const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(initialState);
    const {displayName,email,password,confirmPassword}=formFields;

    const onInputChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    }

    const handleSignUpFormSubmit=async (event)=>{
        event.preventDefault();

        if(password!==confirmPassword){
            alert("Password does not match!");
            return;
        }

        try{
            const {user}= await createUserDocumentUsingEmailAndPassword(email,password);
            await createUserDocumentFromUserAuth(user,{displayName});
            setFormFields(initialState);

        }catch(error){
            switch(error.code) {
                case "auth/weak-password":
                    alert("Weak Password, try some strong ones");
                    console.log("User creation failed at createUserDocumentsUsingEmailAndPassword for : "+error.code);
                break;
                case "auth/email-already-in-use":
                    alert("Email is already in-use");
                    console.log("User creation failed at createUserDocumentsUsingEmailAndPassword for : "+error.code);
                break;
                default:
                    console.log("User creation failed at createUserDocumentsUsingEmailAndPassword",error);
              }
        }   
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign-Up using your email and password</span>
            <form onSubmit={handleSignUpFormSubmit}>
                <FormInput onChange={onInputChange} label="Display Name " type="text" required name="displayName" value={displayName}/>
                <FormInput label="Email " onChange={onInputChange} type="email" required name="email" value={email}/>
                <FormInput label="Password " onChange={onInputChange} type="password" required name="password" value={password}/>
                <FormInput label="Confirm Password  " onChange={onInputChange} type="password" required name="confirmPassword" value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;