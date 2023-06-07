
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.style.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item';

const CheckoutPage=()=>{
        const {cartItems,cartTotal}=useContext(CartContext);   
    return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <span className='header-block1'>Product</span>
            <span className='header-block'>Description</span>
            <span className='header-block'>Quantity</span>
            <span className='header-block'>Price</span>
            <span className='header-block'>Remove</span>

        </div>
        {cartItems.map((cartItem)=><CheckOutItem key={cartItem.id} checkoutItem={cartItem}/>)}
        <span className='total'> Total : Rs. {cartTotal}</span>
    </div>)
}

export default CheckoutPage;