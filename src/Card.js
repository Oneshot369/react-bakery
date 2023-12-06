import React from 'react';
import "./Card.css";

const Card = (props) => {
    const onClick = () =>{
        console.log("in onClick");
        props.editFunc(props.prod, "/edit");
    }
    
    return (
        <div className="card" onClick={() => onClick()}>
            <h1 className="productTitle" >{props.prod.Name} | {props.prod.Qty} In Stock</h1>
            <p style={{ textWrap: "wrap" }}>Ingredients: <br/>{props.prod.Ingredients}</p>
            <p>Calories: {props.prod.Calories}</p>
            <p>Price: {props.prod.Price}</p>
            <p>Qty: {props.prod.Qty}</p>
        </div>
    );
}

export default Card;