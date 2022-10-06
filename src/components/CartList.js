
import React from "react";

function CartList({oprice, setMyProduct, product,orderquantity,size,productname,id, setOprice}) {

    var totalprice = orderquantity * 150;


   function RemoveThis(){
       setOprice(oprice = oprice - orderquantity * 150)
       const newList = product.filter((l) => l.productname !== productname );
       setMyProduct(newList);
    }

    return (
        <>
            <div className="row">
            <div className="col-12 col-md-3">
            <img src="https://i5.walmartimages.com/asr/2a684941-ee35-4e48-8b5e-49ef8f11bc2a_3.b3542297b7a695c4eb78db271af3836f.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="col-12 col-md-8">  
                <p className="cartdesc">PRODUCT: {productname}</p>
                <p  className="cartdesc">SIZE: {size}</p>
                <p  className="cartdesc">Quantity: {orderquantity}</p>
                <p  className="cartdesc">PRICE: ₱ {totalprice}.00</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
                
            </div>
            <div className="col-12 col-md-1">
                <button className="btn btn-danger" onClick={RemoveThis}>Remove</button>
            </div>
            <hr />
        </div>
        </>
    );
}

export default CartList;