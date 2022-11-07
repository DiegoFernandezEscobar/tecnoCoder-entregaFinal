import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CarritoContext'

// Este archivo carrito es el que esta en el navBar y muestra la cantidad de productos en el Cart

export const Carrito = () => {
  
    const {obtenerCantidad} = useContext(CartContext)
    const cantidad = obtenerCantidad()

    return (
      <div >        
          <span>
              {cantidad}
          </span>
      </div>
  )
}
