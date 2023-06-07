import { useContext } from 'react';
import './checkout-item.style.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem=({checkoutItem})=>{
    const {id,name,quantity, imageUrl,price}=checkoutItem;
    const {addItemToCart, removeItemFromCart,clearSpecificItemFromCart}=useContext(CartContext);
    
    const incrementHandler=()=>addItemToCart(checkoutItem);
    const decrementHandler=()=>removeItemFromCart(checkoutItem);
    const clearItemFromCart=()=>clearSpecificItemFromCart(checkoutItem);

    return(
        <div className='checkOut-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemFromCart}>&#10005;</div>
        </div>
    )

}

export default CheckOutItem;