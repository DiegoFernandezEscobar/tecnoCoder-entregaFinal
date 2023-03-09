import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/fireBase'
import { Orbit } from '@uiball/loaders'

const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(true)
    const {ItemDetailId} = useParams()

    
    useEffect(()=>{

      const docRef= doc(db, "productos", ItemDetailId)

      getDoc(docRef).then(response =>{
        const data = response.data()
        const productAdapted = {id: response.id, ...data}
        setProduct(productAdapted)
      }).catch(error =>{
        console.log(error);
      }).finally(()=>{
        setLoading(false)
      }, [])




  
    },[ItemDetailId])

   
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
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer