import React from 'react'
import { useContext,useEffect, useState } from 'react'
import { CartContext } from '../../../Context/CarritoContext'
import { Image, List } from 'semantic-ui-react'
import { Orbit } from '@uiball/loaders'
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import "./Cart.css"

// Algo en mi codigo consumio mis visualizaciones de fireBase y no podia estilar los productos entonces lo setee para asi para poder verlo 
const provincias = [{
  id:"1",
  img: "/Images/Products/11pro.jpg",
  marca :"Adventure",
  nombre:"iphone11",
  cantidad:"8",
  info:"dsdsd",
  precio:"54.000",
  stock :"4"
},{
  id:"1",
  img: "/Images/Products/11pro.jpg",
  marca :"Adventure",
  nombre:"iphone11",
  cantidad:"8",
  info:"dsdsd",
  precio:"54.000",
  stock :"4"
}]

const Cart = () => {

    const {cart, totalCompra} = useContext(CartContext)
    const [loading, setLoading] = useState(true)

    const total = totalCompra()
    


useEffect(()=>{
  setLoading(false) 
},[]) 

if (loading) {
    return(
      <>
      <div className='loader-box' >
       <Orbit className='chaotic-orbit' />
      </div>
      </>
    )
  }

  return (
    <div>
        <h1 className="h1-carrito" >Carrito </h1>
        <hr/>
        {provincias.map(prod =>(
            <div key={prod.id} 
            className="contendor-padre-cart">
      <div className='contendor-madre-cart'>
      <List divided verticalAlign='middle' >
            <List.Item>
              <div className="img-producto-cart" >
            
              <Image avatar size='medium' src={prod.img} />
            
                
              </div>
              <List.Content>
                <List.Header as='a' className='nombre-prod-cart'> <h1 className='h1-nombre-prod-cart'>
                {prod.nombre}</h1></List.Header>
                <br></br>
                <span> Valor por unidad: ${prod.precio} </span>
                <br></br>
                <span> Cantidad de productos:{prod.cantidad} </span> <br>
                </br> 
                <div className='btn-delete-cart'>
                <Button basic color='orange'  >
                      Borrar producto
                </Button>

                </div>
<div className="espacio">
  <img/>
</div>
       </List.Content>
    </List.Item>
  </List>

      </div>
            </div>
        ))}
        <h3>El total de su compra es de:
             <span>
            $ {total}
            </span>
        </h3>
        <button>
        <Link to={"/CheckOut"}>
        <Button basic color='blue' content='Blue'>
          Finalizar compra
        </Button>
        
        </Link>
        </button>
    </div>
  )
}

export default Cart