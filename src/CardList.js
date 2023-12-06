import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const CardList = (props) => {
    console.log('props albumList', props);
    const albums = props.prodList.map((prod) =>{
        return (
            < Card prod = {prod} key={Math.random(1, 1000)}/>
        );
    });
    return <div className="container">{albums}</div>
}

export default CardList;