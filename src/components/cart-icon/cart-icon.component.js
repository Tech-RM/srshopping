import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon=()=>{
    const {cartCount}=useContext(CartContext);
    return(
        <div className='shopping-item-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='shopping-item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
