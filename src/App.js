
import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "./Context/CarritoContext"
import 'semantic-ui-css/semantic.min.css'
import Banner from './components/Banner/Banner';
import CheckOut from "./components/CheckOut/CheckOut"
import Cart from './components/CarritoCompra/Cart/Cart';




function App() {



  return (
    <div className="App">
  
    <CartProvider>
     <BrowserRouter>
       <NavBar/>
       <Banner/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />  
        <Route path='ItemDetail/:ItemDetailId' element={<ItemDetailContainer/>}/>  
        <Route path='Category/:categoryId' element={<ItemListContainer/>}/> 
        <Route path='Cart' element={<Cart/>}/>
        <Route path='CheckOut' element={<CheckOut/>}/>
      </Routes>
     </BrowserRouter>
    </CartProvider>
  
    </div>
  );
}

export default App;
