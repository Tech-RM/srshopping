import { useSelector } from 'react-redux';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import { CheckoutContainer, FirstSpan, Header, Span, Total } from './checkout.style.js';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const CheckoutPage=()=>{
    const cartItems=useSelector(selectCartItems);
    const cartTotal=useSelector(selectCartTotal);

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