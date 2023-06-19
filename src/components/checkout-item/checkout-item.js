import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, Image, ImageContainer, RemoveItem, Section } from './checkout-item.styles';

const CheckOutItem=({checkoutItem})=>{
    const {name,quantity, imageUrl,price}=checkoutItem;
    const {addItemToCart, removeItemFromCart,clearSpecificItemFromCart}=useContext(CartContext);
    
    const incrementHandler=()=>addItemToCart(checkoutItem);
    const decrementHandler=()=>removeItemFromCart(checkoutItem);
    const clearItemFromCart=()=>clearSpecificItemFromCart(checkoutItem);

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