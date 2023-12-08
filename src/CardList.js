import React from "react";
import Card from "./Card";

const CardList = (props) => {
    
    console.log('props albumList', props.prodList);
    const products = props.prodList.map((prod) =>{
        return (
            < Card prod = {prod} key={Math.random(1, 1000)} editFunc={props.editFunc}/>
        );
    });
    return <div className="container">{products}</div>
}

export default CardList;