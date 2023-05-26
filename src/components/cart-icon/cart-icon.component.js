import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon=()=>{
    return(
        <div className='shopping-item-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='shopping-item-count'>10</span>
        </div>
    )
}

export default CartIcon;
