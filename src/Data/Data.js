
const provincias = [{
    id:"1",
    img: "/Images/Products/11pro.jpg",
    marca :"Ktm 1290 Adventure",
    nombre:"",
    categoria:"",
    info:"",
    precio:"$54.000",
    stock :"4"
  },
  {
    id:"2",
    img: "/Images/Products/ipadPro.jpg",
    marca :"Ktm 1290 Adventure",
    nombre:"",
    categoria:"",
    info:"",
    precio:"$54.000",
    stock :"4"
  },
  {
    id:"3",
    img: "/Images/Products/s21.jpg",
    marca :"Ktm 1290 Adventure",
    nombre:"",
    categoria:"",
    info:"",
    precio:"$54.000",
    stock :"4"
  }]

  // FN asincrona que mediante una promesa envia los datos del Json
 export const Data = () => {
       return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(provincias)
        
        }, 2000)
        
      })
    }
 export const DataById = (id) => {
       return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(provincias.find(provincias =>{
            return provincias.id === id
          } ))
        }, 500)
        
      })
    }
    