
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.style.scss';

const CheckoutPage=()=>{
    const {cartItems, addItemToCart, removeItemFromCart}=useContext(CartContext);
    return cartItems.map((cartItem)=>{
        const {id,name,quantity, imageUrl,price}=cartItem;
        return(
        <div key={id}>
            <img src={imageUrl} alt='' />
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span onClick={()=>addItemToCart(cartItem)}>increment</span>
            <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>
        </div>)}
        )
    
}

export default CheckoutPage;