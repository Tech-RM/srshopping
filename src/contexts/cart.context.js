import { createContext, useReducer } from "react";
import { createAction } from "../utility/reducer/reducer.utility";
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


export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>null,
    cartItems:[],
    addItemToCart:()=>null,
    removeItemFromCart:()=>null,
    clearSpecificItem:()=>null,
    cartCount:0,
    cartTotal:0,
});

const CART_ACTION_TYPES={
    SET_CART_OPEN:'SET_CART_OPEN',
    SET_CART_ITEMS:'SET_CART_ITEMS',
}

const cartReducer=(state,action)=>{
    const{type,payload}=action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_OPEN:
             return({...state, isCartOpen:payload});
        case CART_ACTION_TYPES.SET_CART_ITEMS:
             return({...state, ...payload});

        default: throw new console.error(`Unhandeled type ${type} received from cart Dispatch.`);
    }
}

const INITIAL_VALUE={
    isCartOpen:false,
    cartItems:[],
    cartCount:0,
    cartTotal:0,

}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,INITIAL_VALUE);
    const {isCartOpen,cartItems,cartCount,cartTotal}=state;

    const setIsCartOpen=(value)=>dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN,value));

    const ToggleCartOpen=()=>{setIsCartOpen(!isCartOpen)};

    const updateCartItem=(newItems)=>{
        const newCartCount=newItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
        const newCartTotal=newItems.reduce((totalPrice,cartItem)=>totalPrice+cartItem.quantity*cartItem.price,0);
        
        const payload={
            cartItems:newItems,
            cartCount:newCartCount,
            cartTotal:newCartTotal
        };
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,payload));
    }

    const addItemToCart=(productToAdd)=>{
        const newCartItems=addItem(cartItems,productToAdd);
        updateCartItem(newCartItems);
    }
    const removeItemFromCart=(itemToRemove)=>{
        const newCartItems=removeItem(cartItems,itemToRemove);
        updateCartItem(newCartItems);
    }
    const clearSpecificItemFromCart=(itemToClear)=>{
        const newCartItems=clearSpecificItem(cartItems,itemToClear);
        updateCartItem(newCartItems);
    }
   
    const value= {
        isCartOpen,
        setIsCartOpen,
        ToggleCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearSpecificItemFromCart,
        cartCount,
        cartTotal,
    };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}