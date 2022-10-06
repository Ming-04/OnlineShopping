import React from "react";
import { useState } from 'react';
import AddtoCart from "./AddtoCart";    
import Items from "./Items";

function ItemList({id, oprice, setOprice, overallprice, productname ,setProductname, orderquantity , setOrderquantity, size, setSize, product, setMyProduct}) {
    const [itemsonsell, setItemsonSell] =  useState(["CLOTH A", "CLOTH B","CLOTH C" ,"CLOTH D", "CLOTH E","CLOTH F"]);

    const nameList = itemsonsell.map(name=>
        <Items oprice ={oprice} setOprice ={setOprice} name={name} productname = {productname} overallprice = {overallprice}
        setProductname = {setProductname} orderquantity = {orderquantity} setOrderquantity = {setOrderquantity}
        size = {size} setSize = {setSize} product = {product} setMyProduct = {setMyProduct} />    
    );
    return (<> 
        <h1 style={{ textAlign: "center" }}>Products</h1>
        {nameList}
    </>);
}

export default ItemList;


