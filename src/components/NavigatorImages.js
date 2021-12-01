import React, { useContext } from "react";
import ImageCard from "./ImageCard";
import StoreContext from "../context/images/storeContext";
import "../styles/containers.css";
import "../styles/ui.css";

const NavigatorImages = ({ images }) => {
  const { pauseRandomImages, toggleRandomImage } = useContext(StoreContext);
  const handleClickPause = () => {
    pauseRandomImages();
  };
  return (
    <div className="container-navigator">
      <div className="navigator-header">
        <h2>Lastest Images</h2>
        <button
        onClick={() => handleClickPause()}
        className="custom-button"
        style={{ background: toggleRandomImage ? "#78ebb3" : "#fb5263"}}
      >
        {toggleRandomImage ? <span>play</span> : <span>pause</span>}
      </button>
      </div>
      <div className="container-images">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            idImage={image.id}
            image={image.image}
            action="save"
          />
        ))}
      </div>
    </div>
  );
};

export default NavigatorImages;
