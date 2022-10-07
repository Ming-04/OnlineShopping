import React from "react";
import Modal from 'react-modal';
import { useState } from 'react';
import CartList from "./CartList";

function Cart({id,oprice, setOprice, cartIsOpen, setModalIsOpen, product, orderquantity, setMyProduct}) {
 /* const [cartsItem, setcartsItem] = useState([ "Cloth A", "Cloth B","Cloth C" ,"Cloth D", "Cloth E","Cloth F"]);
  const [items, setitems] = useState("");

  const cartitemlist = cartsItem.map(itemname=>
   <CartList itemname={itemname} />  
  );*/  

  function Order(){
    alert('Thank you for ordering.');
  }

  function RemoveAll(){
    setOprice(oprice = 0)
    const newList = product.filter((l) => '' !== '' );
    setMyProduct(newList);
 }

  const cartitems = product.map(cartitemlist =>
      <CartList oprice={oprice}setOprice={setOprice} key={cartitemlist.productname} setMyProduct={setMyProduct} product={product} id={cartitemlist.id} productname={cartitemlist.productname} size ={cartitemlist.size} orderquantity={cartitemlist.orderquantity}/>
  );
    return (
        <Modal isOpen={cartIsOpen}>
        <div className='row justify-content-between'>
          <div className='col-3'>
              <h2>Shopping Bag</h2> 
          </div>
          <div className='col-3' style={{ textAlign: "right" }}>
            <button type="button" className="btn btn-danger" onClick={() => setModalIsOpen(false)}>ⓧ</button>
          </div>
        <hr />
        </div>
        <div>
          {cartitems}
        </div>
        <div className='row justify-content-between'>
          <div className='col-3'>
          <button type="button" class="btn btn-danger" onClick={RemoveAll}>Empty All</button>
        </div>
          <div className='col-3' style={{ textAlign: "right" }}>
              <span className="totalPrice">₱ {oprice}.00</span>
              <button type="button" className="btn btn-dark" onClick={Order}>CHECK OUT</button>
          </div>
        </div>
        </Modal>
    );
}

export default Cart;