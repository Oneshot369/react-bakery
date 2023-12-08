import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";
import './Edit.css'

const EditOne = (props) => {
    let ourProduct={
        ID: 0,
        Name: "",
        Calories: 0,
        Ingredients: "",
        Price: "",
        Qty: 0
    }
    let name = '';
    let cal = 0;
    let ing = '';
    let price = 0;
    let qty = 0;
    let isEditing = false;
    if(props.prod){
        ourProduct = props.prod;
        isEditing = true;
        name = ourProduct.Name;
        cal = ourProduct.Calories;
        ing = ourProduct.Ingredients;
        price = ourProduct.Price;
        qty = ourProduct.Qty;
    }
    let showAddBtn = false;
    if(props.user && isEditing){
        showAddBtn = true;
    }

    const navigate = useNavigate();
    const [prodName, setProdName] = useState(name);
    const [prodCalories, setProdCalories] = useState(cal);
    const [prodIngredients, setProdIngredients] = useState(ing);
    const [prodPrice, setProdPrice] = useState(price);
    const [prodQty, setProdQty] = useState(qty);

    const updateName= (event) =>{
        setProdName(event.target.value);
    }
    const updateCal= (event) =>{
        setProdCalories(event.target.value);
    }

    const updateIng= (event) =>{
        setProdIngredients(event.target.value);
    }

    const updatePrice= (event) =>{
        setProdPrice(event.target.value);
    }

    const updateQty= (event) =>{
        setProdQty(event.target.value);
    }
    
    

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("submitted");

        const productToUpdate={
            ID: ourProduct.ID,
            Name: prodName,
            Calories: prodCalories,
            Ingredients: prodIngredients,
            Price: prodPrice,
            Qty: prodQty,
        }

        saveAlbum(productToUpdate);
    }

    
    const handleCancel = () =>{
        navigate("/");
    }
    const handleDelete = (event) =>{
        console.log("Delete", ourProduct.ID);
        dataSource.delete('/products/' + ourProduct.ID);
        navigate("/");
    }

    const handleToCart = async (event) =>{
        console.log("userID", props.user.ID);
        console.log("productID", ourProduct.ID);
        let resString = '/cart/' + props.user.ID + '/' + ourProduct.ID;
        
        await dataSource.put(resString);
    }
    const saveAlbum = async (prod) =>{
        let res;
        if(isEditing){
            res = await dataSource.put('/products', prod);
        }
        else{
            res = await dataSource.post('/products', prod);
        }
        console.log(res);
        navigate("/");
    }

    return <div>
        <form className="container" onSubmit={handleFormSubmit}>
            <h1>{isEditing ?  "Edit":"Create New"} Product</h1>
            <div className="mb-3 container">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                </label>
                <input
                    onChange={updateName}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={prodName}
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Calories
                </label>
                <input
                    onChange={updateCal}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={prodCalories}
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Ingredients
                </label>
                <input
                    onChange={updateIng}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={prodIngredients}
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Price
                </label>
                <input
                    onChange={updatePrice}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={prodPrice}
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Quantity
                </label>
                <input
                    onChange={updateQty}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={prodQty}
                />
            </div>
            <button type="button" className="btn btn-primary can" onClick={handleCancel}>
                Cancel
            </button>
            <button type="submit" className="btn btn-primary sub">
                Submit
            </button>
            {!isEditing ? "": <button type="button" className="btn btn-primary del" onClick={handleDelete}>
                Delete
            </button>}
            {!showAddBtn ? "": <button type="button" className="btn btn-primary del" onClick={handleToCart}>
                Cart
            </button>}
        </form>

    </div>;
};
export default EditOne;