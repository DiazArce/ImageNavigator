import React, { useState, useContext, useEffect } from "react";
import { getImagesByArrayOfId } from "../api/imageAPI";
import StoreContext from "../context/images/storeContext";
import "../styles/containers.css";
import ImageCard from "./ImageCard";
import { checkLocalStorage } from "../utils";

const StoredImages = () => {
  const { idImageList } = useContext(StoreContext);
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const {isOk, arrayOfIdsParsed} = checkLocalStorage()
    if(isOk){
     if(arrayOfIdsParsed.length > 0){
        getImagesByArrayOfId([...arrayOfIdsParsed, ...idImageList]).then((data) => {
            setImages(data);
          });
     }
     else{
         setImages([])
     }
    }
  }, [idImageList]);
 
  return (
    <div className= "container-saved-images">
      <h2>Saved Images</h2>
      <div className="container-images">
        {images.length > 0 ?
          images.map((image, index) => (
            <ImageCard key={index} idImage={image.id} image={image.image} action="delete"/>
          )):<span>No saved images</span>}
      </div>
    </div>
  );
};

export default StoredImages;
