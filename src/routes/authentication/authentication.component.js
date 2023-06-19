
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SIgnInUsingEmailAndPassword from "../../components/sign-in/sign-in-using-email&password.comonent";
import { AuthContainer } from "./authentication.styles";



const AuthenticationRoute=()=>{
    return(
        <AuthContainer>
            <SIgnInUsingEmailAndPassword />
            <SignUpForm />
        </AuthContainer>
    )
}
export default AuthenticationRoute;