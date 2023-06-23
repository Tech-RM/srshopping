import { Outlet} from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as Logosvg } from "../../assets/crown.svg";
import { signOutUser } from "../../utility/firebase/firebase.utility";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.js";
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navigation.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const Navigation=()=>{

    const dispatch=useDispatch();
    const currentUser=useSelector(selectCurrentUser);
    const isCartOpen=useSelector(selectIsCartOpen);

    const ToggleCartOpen=()=>dispatch(setIsCartOpen(!isCartOpen));
    
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