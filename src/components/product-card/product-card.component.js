
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { CardButton, CardFooter, CardImage, NameSpan, PriceSpan, ProductCardContainer } from './product-card.styles';
import { BUTTON_TYPPE_CLASSES } from '../button/button.component';



const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    const {addItemToCart}=useContext(CartContext);
    const addProduct=()=>addItemToCart(product);
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