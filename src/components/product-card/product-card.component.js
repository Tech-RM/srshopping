import { CardButton, CardFooter, CardImage, NameSpan, PriceSpan, ProductCardContainer } from './product-card.styles';
import { BUTTON_TYPPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard=({product})=>{
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems);
    const {name,price,imageUrl}=product;
    const addProduct=()=>dispatch(addItemToCart(cartItems,product));
    return(
        <ProductCardContainer>
            <CardImage src={imageUrl} alt={`${name}`}/>
            <CardFooter>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CardFooter>
            <CardButton buttonType={BUTTON_TYPPE_CLASSES.inverted} onClick={addProduct}>Add to Cart</CardButton>
        </ProductCardContainer>
    )
}

export default ProductCard;