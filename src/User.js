import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";
import './Edit.css'
import CardList from './CardList';

const User = (props) => {
    let ourUser={
        ID: -1,
        FirstName: "",
        LastName: "",
        Email: "",
        Username: "",
        Password: "",
        Cart: []
    }
    let loggedIn = false;
    if(props.user){
        loggedIn = true;
        ourUser = props.user;
    }


    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    

    const updateName= (event) =>{
        setUserName(event.target.value);
    }
    const updatePass= (event) =>{
        setUserPass(event.target.value);
    }
    
    

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("submitted Login");

        const loginRequest={
            Username: userName,
            Password: userPass
        }

        handleLogin(loginRequest);
    }

    
    const handleCancel = () =>{
        navigate("/");
    }

    const removeFromCart = async (id) => {
        let resString = '/cart/' + ourUser.ID + '/' + id.ID;
        await dataSource.delete(resString);
        console.log("Removed from cart", id);

        const loginRequest={
            Username: ourUser.Username,
            Password: ourUser.Password
        }

        handleLogin(loginRequest);
    }

    const handleLogin = async (prod) =>{
        let res;
        res = await dataSource.post('/users/login', prod);
        console.log("login request",prod);
        console.log("results", res.data);
        if(res.data.user.length !== 0){
            ourUser = res.data.user[0];
            loggedIn = true;
            props.loginFunc(ourUser);
        }
        else{
            ourUser = {
                ID: -1,
                FirstName: "",
                LastName: "",
                Email: "",
                Username: "",
                Password: "",
                Cart: []}
            loggedIn = false;
        }
        console.log(ourUser);
        console.log(loggedIn)
    }

    return <div>
        {!loggedIn ? 
        <form className="container" onSubmit={handleFormSubmit}>
            <h1>Login</h1>  
            <div className="mb-3 container">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                </label>
                <input
                    onChange={updateName}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={userName}
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    onChange={updatePass}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={userPass}
                />
            </div>
            <button type="button" className="btn btn-primary can" onClick={handleCancel}>
                Cancel
            </button>
            <button type="submit" className="btn btn-primary sub">
                Login
            </button>
        </form>
        :
        <div className="container">
            <h1>Hello {ourUser.FirstName}, this is what is in your Cart:</h1>
        
            <CardList prodList = {ourUser.Cart} editFunc = {removeFromCart}/>
        </div>
        }
        

    </div>;
};
export default User;