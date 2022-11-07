import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Icon } from 'semantic-ui-react'
import "./NavBar.css"
import { Carrito } from '../CarritoCompra/Carrito';
import {getDocs, collection} from "firebase/firestore"
import {db} from "../../service/fireBase/index"
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {

  const [categoria, setCategoria]= useState([])
  
  useEffect(()=>{
    const collectionRef = collection(db, "categorias")

    getDocs(collectionRef).then( response =>{
      
      const categoriasAdaptadas = response.docs.map(
            doc =>{
              const data = doc.data()
              const id = doc.id
              return { id, ...data}
            }) 
      setCategoria(categoriasAdaptadas)
      
    }
    )
  })

  return (
    <Navbar  className='navBar'>
      <Container className='Navbar-color'>
     
      <Link to={"/"}>

      <Button animated="vertical">
      <Button.Content visible>TecnoCoder</Button.Content>
      <Button.Content hidden>Home</Button.Content>
    </Button>
      </Link>
       
<Nav.Item>


<Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {              
                categoria.map(
                  cat => (                    
                    <NavDropdown.Item key={cat.id}>
                      <Link to={`category/${cat.slug}`}>
                      {cat.label}
                      </Link>
                      </NavDropdown.Item>                 
                  )
                )
                }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

</Nav.Item>

         <Nav.Item>
        <Link to={"Cart"}>
         <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Carrito/>
        <Icon name='shop' />
      </Button.Content>
    </Button>
        </Link>
         </Nav.Item>
        

      </Container>
    </Navbar>
  );
}
export default NavBar;
