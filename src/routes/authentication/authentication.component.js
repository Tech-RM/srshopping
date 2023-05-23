
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import { SignInUsingPopup } from "../../components/sign-in/sign-in-using-google.component";
import SIgnInUsingEmailAndPassword from "../../components/sign-in/sign-in-using-email&password.comonent";

const AuthenticationRoute=()=>{
    return(
        <div>
            <SIgnInUsingEmailAndPassword />
            <SignInUsingPopup />
            <SignUpForm />
        </div>
    )
}
export default AuthenticationRoute;