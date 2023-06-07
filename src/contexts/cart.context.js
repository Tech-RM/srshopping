import { createContext, useEffect, useState } from "react";
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

export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen]=useState(false);
    const ToggleCartOpen=()=>{setIsCartOpen(!isCartOpen)};

    const [cartItems,setCartItems]=useState([]);

    const addItemToCart=(productToAdd)=>{
        return(setCartItems(addItem(cartItems,productToAdd)));
    }
    const removeItemFromCart=(itemToRemove)=>{
        return setCartItems(removeItem(cartItems,itemToRemove));
    }
    const clearSpecificItemFromCart=(itemToClear)=>{
        return setCartItems(clearSpecificItem(cartItems,itemToClear));
    }
    const [cartCount, setCartCount]=useState(0);
    
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItems])
    
    const [cartTotal, setCartTotal]=useState(0);
    useEffect(()=>{
        const newCartTotal=cartItems.reduce((totalPrice,cartItem)=>totalPrice+cartItem.quantity*cartItem.price,0)
        setCartTotal(newCartTotal);
    },[cartItems])

    
    

    const value= {isCartOpen,setIsCartOpen,ToggleCartOpen,cartItems,addItemToCart,removeItemFromCart,clearSpecificItemFromCart,cartCount,cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}