import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearSpecificItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { CheckoutItemContainer, Image, ImageContainer, RemoveItem, Section } from './checkout-item.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckOutItem=({checkoutItem})=>{
    const cartItems=useSelector(selectCartItems);

    const dispatch=useDispatch();
    const {name,quantity, imageUrl,price}=checkoutItem;    
    const incrementHandler=()=>dispatch(addItemToCart(cartItems,checkoutItem));
    const decrementHandler=()=>dispatch(removeItemFromCart(cartItems,checkoutItem));
    const clearItemFromCart=()=>dispatch(clearSpecificItemFromCart(cartItems,checkoutItem));

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt='' />
            </ImageContainer>
            <Section>{name}</Section>
            <Section className='quantity'>
                <Section as='div' className='arrow' onClick={decrementHandler}>&#10094;</Section>
                <Section className='value'>{quantity}</Section>
                <Section as='div' className='arrow' onClick={incrementHandler}>&#10095;</Section>
            </Section>
            <Section>{price}</Section>
            <RemoveItem onClick={clearItemFromCart}>&#10005;</RemoveItem>
        </CheckoutItemContainer>
    )

}

export default CheckOutItem;