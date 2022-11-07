import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    

    const addItem = (productToAdd) =>{
        console.log("AddItem");
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else{
            console.log("ya esta en el carrito");
        }
    }

    const isInCart = (id)=>{
        return cart.some(prod => prod.id === id)
    }
    
 const obtenerCantidad = ()=>{
   
 let acumulador = 0
   cart.forEach(prod => acumulador += prod.cantidad)
    return acumulador
 }

//  const deleteCart = () =>{
//     return setCart([])
//  }
 
 const totalCompra = ()=>{
     let accu = 0 
            cart.forEach(prod => accu += prod.precio )
            return accu
 }
    
    return(
        <CartContext.Provider value={{cart, addItem, obtenerCantidad, totalCompra}}>
            {children}
        </CartContext.Provider>
    
    )
}
