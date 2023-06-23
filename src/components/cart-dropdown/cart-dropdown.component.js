import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, EpmtyMessage, ItemsContainer } from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';





const CartDropdown=()=>{
    const cartItems=useSelector(selectCartItems);
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>navigate('/checkout');
    return(
        <CartDropdownContainer>
            <ItemsContainer>
                {cartItems.length?(cartItems.map(item=><CartItem key={item.id} item={item} />))
                :(<EpmtyMessage>Your cart is empty.</EpmtyMessage>)}
                </ItemsContainer>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;