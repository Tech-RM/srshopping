import { CartItemContainer, ItemDetails, ItemImage, ItemName } from "./cart-item.styles";


const CartItem=({item})=>{

    const {name,imageUrl,price,quantity}=item;
    return(
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span>{quantity} x {price}</span>
            </ItemDetails>


        </CartItemContainer>
    )
}

export default CartItem;