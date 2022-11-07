import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from "../../Context/CarritoContext"
import "./itemDetail.css"

const ItemDetail = ({ product }) => {
const id = product.id,
nombre = product.nombre,
precio = product.precio,
img =product.img,
stock = product.cantidad



const {addItem} = useContext(CartContext)

  const handleOnAdd = (cantidad) =>{
    const productToAdd ={
      id, nombre, precio, cantidad, img
    }
    addItem(productToAdd)
    
  }


  return (
     <div>
          <Card className="box-container-detail">
        <div className='titulo-detail'>
          <h3>
          { product.nombre}
          <hr></hr>
          </h3>
        </div>        
        <Card.Body className='div-flex-madre'>
           <div className='caja-img-flex'>
            <div className='div-img-detail'>
              <Card.Img variant="top" src={product.img} className="img-detail" />
            </div>
           </div>
          <div className='contido-lateral-flex'>
            <div className='info-detail'>
              <div className='div-flex'>
              <div className='marca-detail'>
                Marca: {" "}
              {product.marca}
              <hr></hr>
              </div>
         <div className="precio-detail"> 
                 <div className='precio-box' >
                 ${product.precio}
                  </div>

            <div>
              {stock !==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} />: <span>No hay Stock disponible en este momento</span>} 
            </div>

        </div>
              </div>
            <div className='info-detail'>
              <span >
                {product.info}
              </span>
            </div>
                  
            </div>
                  
          </div>
        </Card.Body>
            
    </Card>
    </div>
  )
}

export default ItemDetail


