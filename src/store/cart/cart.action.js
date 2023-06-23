import { createAction } from "../../utility/reducer/reducer.utility";
import { CART_ACTION_TYPES } from "./cart.types";

const addItem=(cartItems,productToAdd)=>{
    //checks if the item exists previously
    const productExists=cartItems.find((cartItem)=>productToAdd.id===cartItem.id)

    //if matches, increse the quantity and retun a new array
    if(productExists){
        return cartItems.map((cartItem)=>(
            productToAdd.id===cartItem.id)?{...cartItem, quantity:cartItem.quantity+1}
            :cartItem );
    }

    //if not found/matches, create a new array with quantity 1 and returns all whole array.
    return [...cartItems,{...productToAdd, quantity:1}]
}

const removeItem=(cartItems,itemToRemove)=>{
//check and remove the item if it has only 1 quantity
if (itemToRemove.quantity===1){
   return cartItems.filter(cartItem=>itemToRemove.id!==cartItem.id)
}
//else decrese the quantity by 1 and return a new array.
return cartItems.map(cartItem=>(
    itemToRemove.id===cartItem.id)?{...cartItem, quantity:itemToRemove.quantity-1}
    :cartItem );
}
const clearSpecificItem=(cartItems,itemToClear)=>{
return cartItems.filter(cartItem=>itemToClear.id!==cartItem.id)  
}

//dispatching actions....below...//

export const addItemToCart=(cartItems,productToAdd)=>{
    const newCartItems=addItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart=(cartItems,itemToRemove)=>{
    const newCartItems=removeItem(cartItems,itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const clearSpecificItemFromCart=(cartItems,itemToClear)=>{
    const newCartItems=clearSpecificItem(cartItems,itemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}


export const setIsCartOpen=(bool)=>createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);