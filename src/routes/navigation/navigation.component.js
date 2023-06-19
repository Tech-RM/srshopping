import { Outlet} from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logosvg } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utility/firebase/firebase.utility";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

import "./navigation.styles.js";
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navigation.styles.js";

const Navigation=()=>{

    
    const {currentUser}=useContext(UserContext);
    const {isCartOpen,ToggleCartOpen}=useContext(CartContext);
    
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logosvg/>
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to='/shop'>Shop Now</NavLink>
                    {currentUser? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
                                :(<NavLink className="nav-link" to="/auth">Sign In</NavLink>)
                    }
                    <NavLink className="shopping-cart" onClick={ToggleCartOpen}>
                        <CartIcon/>
                    </NavLink>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
                <Outlet/>
        </Fragment>
    );
}

export default Navigation;