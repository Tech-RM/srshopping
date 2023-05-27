import { createContext, useState } from "react";


export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>null,
});

export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen]=useState(false);
    const ToggleCartOpen=()=>{setIsCartOpen(!isCartOpen)};
    const value= {isCartOpen,setIsCartOpen,ToggleCartOpen};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}