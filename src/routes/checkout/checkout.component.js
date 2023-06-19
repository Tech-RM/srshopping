
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import { CheckoutContainer, FirstSpan, Header, Span, Total } from './checkout.style.js';

const CheckoutPage=()=>{
        const {cartItems,cartTotal}=useContext(CartContext);   
    return (
    <CheckoutContainer>
        <Header>
            <FirstSpan>Product</FirstSpan>
            <Span>Description</Span>
            <Span>Quantity</Span>
            <Span>Price</Span>
            <Span>Remove</Span>

        </Header>
        {cartItems.map((cartItem)=><CheckOutItem key={cartItem.id} checkoutItem={cartItem}/>)}
        <Total className='total'> Total : Rs. {cartTotal}</Total>
    </CheckoutContainer>)
}

export default CheckoutPage;