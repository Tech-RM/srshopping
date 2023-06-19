import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ItemCount, ShoppingIconContainer,ShoppingIcon } from './cart-icon.styles';

const CartIcon=()=>{
    const {cartCount}=useContext(CartContext);
    return(
        <ShoppingIconContainer>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ShoppingIconContainer>
    )
}

export default CartIcon;
