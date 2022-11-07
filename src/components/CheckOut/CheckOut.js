import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CarritoContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/fireBase/index'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import { Button, Form } from 'semantic-ui-react'





 const CheckOut = () => {

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  console.log(nombre);
  console.log(telefono);
  console.log(email);

  const handleChangeNombre = event => {
      return (
          setNombre(event.target.value)
      )
  }

  const handleChangeTelefono = event => {
      return (
          setTelefono(event.target.value)
      )
  }

  const handleChangeEmail = event => {
      return (
          setEmail(event.target.value)
      )
  }



    const [loading, setLoading]= useState(false)
    const {cart, totalCompra, deleteCart} = useContext(CartContext)
    const total = totalCompra()
    



    const navigate = useNavigate()

    const createOrder = async ()=>{
      setLoading(true)
      try {
        const objOrder = {
            usuario: {
                Nombre: nombre,
                Telefono: telefono,
                Email: email
            },
            productos: cart,
            total: total
        }

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'productos')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'pedidos')

            const orderAdded = await addDoc(orderRef, objOrder)    

            Toast.fire({
              icon: 'success',
              title: `Su pedido fue realizado con exito, el Id de su orden es ${orderAdded.id}`
            })
            
              deleteCart()
              setTimeout(() => {
                navigate('/')
              },5000);
            }else{
              Toast.fire({
                icon: 'error',
                title: 'Uppsss Ocurrio un error',
                text: 'no tenemos Stock! Consulta la semana que viene'
              })
            }
              }catch (error){
                  console.log(error);
              }finally{
                setLoading(false)
              }
    }
   
    if (loading) {
      return <h1> Se esta generando su orden </h1>
    }

  return (
    <div>   
       <div className='divCheckout'>
            <h1 className='titleCheckout' style={{marginTop:25 , marginLeft: 15}}>Checkout</h1>
            <div className='divformCheckout'>

                <Form>
                <Form.Field>
                  <label></label>
                  <input placeholder='Ingrese su Nombre' onChange={handleChangeNombre}/>
                </Form.Field>
                <Form.Field>
                  <label></label>
                  <input placeholder='Ingrese su Telefono' onChange={handleChangeTelefono} />
                </Form.Field>
               
                <Form.Field>
                  <label></label>
                  <input placeholder='Ingrese su Email' onChange={handleChangeEmail}/>
                </Form.Field>              
                </Form>
            </div>

            <Button basic color='green' content='Green' onClick={createOrder} style={{marginTop:25 , marginLeft: 15}}>
              Finalizar Compra
            </Button>
            
        </div>
    </div>
  )
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



export default CheckOut
