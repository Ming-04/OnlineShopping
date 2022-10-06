import React from "react";
import { useState } from 'react';

function Titles(){
    
    const [name, setTitle] = useState('');
    const [myArray, setMyArray] = useState(["React CRUD ", "CRUD w/ API","CRUD w/ Database","CRUD w/ Auth"]);

    function Add(){
        setMyArray([...myArray, name]);
        setTitle('');
        var TF = document.getElementById("TextField").value = "";
    };
    return(
        <>
        <div className="LastPart">
        <h2>To-Do List (API source tutorial)</h2>
        <p>Add Item:
            <input id="TextField" placeholder="type a name"
            onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={Add}>Add Item</button>
        </p>
            {
            myArray.map((tayts) => {
                return <h2>{tayts}</h2>;
            })}
            </div>
        </>
    );
};

export default Titles;