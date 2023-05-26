
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SIgnInUsingEmailAndPassword from "../../components/sign-in/sign-in-using-email&password.comonent";

import './authentication.styles.scss';

const AuthenticationRoute=()=>{
    return(
        <div className="authentication-container">
            <SIgnInUsingEmailAndPassword />
            <SignUpForm />
        </div>
    )
}
export default AuthenticationRoute;