import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const EditAlbum = (props) => {

    let ourProduct={
        ID: 0,
        Name: "",
        Calories: 0,
        Ingredients: "",
        Price: "",
        Qty: 0
    }
    let isEditing = true;
    
    if(props.album){
        ourProduct = props.album;
        isEditing = false
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("submit");

        const album={
            albumId: ourAlbum.albumId,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        }
        console.log(album);

        saveAlbum(album);
    }

    const saveAlbum = async (album) =>{
        
    }


    return <div>
        <form className="container" onSubmit={handleFormSubmit}>
            <h1>{isEditing ? "Create New": "Edit"} album</h1>
            <div className="mb-3 container">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Album Title
                </label>
                <input
                    onChange={updateTitle}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Artist
                </label>
                <input
                    onChange={updateArtist}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                </label>
                <input
                    onChange={updateDescription}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Year
                </label>
                <input
                    onChange={updateYear}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Image
                </label>
                <input
                    onChange={updateImage}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <button type="button" className="btn btn-primary " onClick={handleCancel}>
                Cancel
            </button>
            <button type="submit" className="btn btn-primary ">
                Submit
            </button>
        </form>

    </div>;
};
export default EditAlbum;