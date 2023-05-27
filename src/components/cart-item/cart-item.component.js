import './cart-item.styles.scss';

const CartItem=({item})=>{

    const {name,imageUrl,price,quantity}=item;
    return(
        <div className='cart-item-container'>
            <img className='cart-item-image' src={imageUrl} alt={`${name}`} />
            <div className='item-details-container'>
                <h2 className='cart-item-name'>{name}</h2>
                <span className='cart-item-price'>{quantity} x {price}</span>
            </div>


        </div>
    )
}

export default CartItem;