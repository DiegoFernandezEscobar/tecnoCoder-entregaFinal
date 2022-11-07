import React, { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import { Orbit } from '@uiball/loaders'
import ItemList from './ItemList';
import './ItemList.css'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/fireBase';
import { useParams } from 'react-router-dom';
import { NewtonsCradle } from '@uiball/loaders'

<NewtonsCradle 
 size={100}
 speed={1.4} 
 color="black" 
 
 />

const ItemListContainer = () => {
const [products , setProducts ] = useState([])
const [loading, setLoading] = useState(true)

const {categoryId} = useParams()

useEffect(()=>{
  setLoading(true)  
  
  const collectionRef = categoryId 
  ? query(collection(db, "productos"),where("category", "==", categoryId))
  : collection(db, "productos")

  getDocs(collectionRef).then((response
    )=>{
        const productsAdapted = response.docs.map(doc=>{
          const data = doc.data()

          return { id:doc.id, ...data}
        })
       setProducts(productsAdapted) 
    }).catch(error =>{
      console.log(error);
    }).finally(()=>{
      setLoading(false)
    })
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
<Stack direction="horizontal" gap={3}>
      <div className="contenedor-padre-itemList">
          <ItemList products={products}/>
      </div>
     
    </Stack>
  )
}

export default ItemListContainer


