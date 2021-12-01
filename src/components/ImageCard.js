import React, { useContext } from "react";
import StoreContext from "../context/images/storeContext";
import Image from "./Image";
import "../styles/containers.css";

const ImageCard = ({ idImage, image, action }) => {
  const { saveImage, deleteImage} = useContext(StoreContext);
  const handleToggle = () => {
    switch (action) {
        case 'delete':
            deleteImage(idImage)
            break;
        case 'save':
            saveImage(idImage);
            break;
        
        default:
            break;
    } 
  };
  return (
    <button onClick={() => handleToggle()} className="container-card">
      <Image image={image} />
    </button>
  );
};

export default ImageCard;
