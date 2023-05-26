import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logosvg } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utility/firebase/firebase.utility";

import "./navigation.styles.scss";

const Navigation=()=>{

    
    const {currentUser}=useContext(UserContext);
    
    return(
        <Fragment>
            <div  className="navigation">
                <Link className="logo-link" to="/">
                    <Logosvg/>
                </Link>
                <div className="navigation-links-container">

                    <Link className="nav-link" to='/shop'>Shop Now</Link>
                    {currentUser? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>)
                                :(<Link className="nav-link" to="/auth">Sign In</Link>)
                    }
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </Fragment>
    );
}

export default Navigation;