import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logosvg } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation=()=>{
    return(
        <Fragment>
            <div  className="navigation">
                <Link className="logo-link" to="/">
                    <Logosvg/>
                </Link>
                <div className="navigation-links-container">

                    <Link className="nav-link" to='/shop'>Shop Now</Link>
                    <Link className="nav-link" to="/auth">Sign In</Link>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </Fragment>
    );
}

export default Navigation;