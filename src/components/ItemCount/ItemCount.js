import React, {  useState } from 'react'
import "./ItemCount.css"
import { Button } from 'semantic-ui-react'

const ItemCount = ({stock = 0, inicio = 1, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicio)
    
    const handleSumar = () => {    
      
      if(cantidad <= stock ){
        setCantidad(cantidad + 1 )
    }
      
    }
    const handleRestar = () =>{
        if(cantidad > 1 ){
          setCantidad(cantidad - 1 )
        }
    }
    
  
    

  return (
    <div className='divMadre-item-count'>
        <div className='div-item-count'>
           <div className='item-count'>
            <span>
              <Button basic color='olive' onClick={handleRestar}>
                  -
             </Button>
            </span>
           </div>
          <div className='number-item-count'>
            <span style={{margin:2}}>
            {cantidad}
            </span>
          </div>
           <div>
            <span className='item-count'>            
            <Button basic color='olive' onClick={handleSumar}>
                  +
            </Button>
            </span>
           </div>
           
           <div>
           <Button  variant="primary" onClick={()=>{onAdd(cantidad)}}>Comprar</Button>
          
           </div>
          </div>
    </div>
  )
}

export default ItemCount


