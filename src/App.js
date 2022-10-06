import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import { useState } from 'react';
import CartList from './components/CartList';
import Items from './components/Items';


import CodestoTransfer from './components/CodestoTransfer';
import StudentList from './components/StudentList';

function App() {

  //Items List
  const [quantity, setQuantity] = useState();
  const [myCart, setMyCart] = useState([]);

  //Modal
  const [cartIsOpen, setModalIsOpen] = useState(false);


  //Add to Cart
  const [productname, setProductname] = useState('');
  const [orderquantity, setOrderquantity] = useState('');
  const [size, setSize] = useState ('');
  const [id, setID] = useState('');
  const [product, setMyProduct] = useState([]);

  //Overall Price
  const [oprice, setOprice] = useState(0)


  return (  
    <> 
      <Cart id={id} oprice ={oprice} setOprice ={setOprice} cartIsOpen = {cartIsOpen} setModalIsOpen = {setModalIsOpen} productname = {productname} 
      setProductname = {setProductname} orderquantity = {orderquantity} setOrderquantity = {setOrderquantity}
      size = {size} setSize = {setSize} product = {product} setMyProduct = {setMyProduct} />
      
      <Header myCart = {product} cartIsOpen = {cartIsOpen} setModalIsOpen = {setModalIsOpen}/>
      

      <div id="ProdList" className='row justify-content-md-center'>
      <ItemList id={id}  oprice ={oprice} setOprice ={setOprice} setQuantity = {setQuantity} quantity = {quantity} setMyCart = {setMyCart}  productname = {productname} 
      setProductname = {setProductname} orderquantity = {orderquantity} setOrderquantity = {setOrderquantity}
      size = {size} setSize = {setSize} product = {product} setMyProduct = {setMyProduct} />
      </div>
      
      <Footer />
    </>
  );
}


export default App;