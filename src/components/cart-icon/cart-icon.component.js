import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector';
import { ItemCount, ShoppingIconContainer,ShoppingIcon } from './cart-icon.styles';

const CartIcon=()=>{
    const cartCount=useSelector(selectCartCount);
    return(
        <ShoppingIconContainer>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ShoppingIconContainer>
    )
}

export default CartIcon;
