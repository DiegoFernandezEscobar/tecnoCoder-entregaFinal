import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemList.css'
import { Button, Icon } from 'semantic-ui-react'

const Item = ({id, img, marca, nombre, categoria, precio }) => {
  return (
    <div className='tarjeta-Individual'>
        <Card className='contendor-card'>
      <Card.Img variant="top" src={img} className="imgListProduct" />
      <Card.Body>
        <div className='titulo-card'>
          <h4>
          {nombre}
          </h4>
        </div>  
        
        <Card.Text>
       <div className='anio-List'>
        <span>
            <span>
              Marca:
            </span>
        { marca}
        </span>
       </div>
       <div className='km-List'>
        <span>
            <span>
              Precio:
            </span>
            ${ precio}
            </span>
       </div>
        </Card.Text>
        <Link to={`ItemDetail/${id}`}>
        <Button animated>
      <Button.Content visible>Ver Detalle</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item