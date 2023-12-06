import React from 'react';
import "./Card.css";

const Card = (props) => {
    
    return (
        <div className="card">
            <h1 className="productTitle" >{props.prod.Name} | {props.prod.Qty} In Stock</h1>
            <p style={{ textWrap: "wrap" }}>Ingredients: <br/>{props.prod.Ingredients}</p>
            <p>Calories: {props.prod.Calories}</p>
            <p>Price: {props.prod.Price}</p>
        </div>
    );
}

export default Card;