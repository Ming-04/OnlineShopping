import React from "react";
import { useState } from 'react';

function CodestoTransfer(){
    
    let idholder  = 1;
    console.log(idholder);  
    const [name, setTitle] = useState('');
    const [myArray, setMyArray] = useState(["React CRUD ", "CRUD w/ API","CRUD w/ Database","CRUD w/ Auth"]);

    const [productname, setProductname] = useState('');
    const [price, setPrice] = useState('');
    const [id, setID] = useState ('');
    const [product, setMyProduct] = useState([{id: 1, name:"try", price: "12"},{id: 1, name:"try", price: "12"}]);

    console.log(product);

    function AddProduct(){
        setMyProduct([...product, {id: 1, name:productname, price: price}])
        setProductname('');
        setPrice('');
        setID('');
        var TF = document.getElementById("TextField").value = "";
        var TC = document.getElementsByClassName("#Next").value = ""
    };

    function Add(){
        setMyArray([...myArray, name]);
        setTitle('');
    };
    return(
        <>
        <div>
            {
                product.map((myarray) => (
                    <div>
                    <h4> {myarray.name}</h4> 
                    <h4> {myarray.price}</h4>
                    </div>
                ))
            }
        </div>
        <div className="LastPart">
        <h2>To-Do List (API source tutorial)</h2>
        <p>Add Item:
            <input id="TextField" placeholder="type a name"
            onChange={(e) => setProductname(e.target.value)}/>
            <input className="Next" placeholder="type a name"
            onChange={(x) => setPrice(x.target.value)}/>
            <button onClick={AddProduct}>Add Item</button>
        </p>
            </div>  
        <ul>
            <li></li>
        </ul>
        </>
    );
};

export default CodestoTransfer;