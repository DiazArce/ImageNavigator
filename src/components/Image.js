import React from "react";
import "../styles/containers.css"
const Image = ({ image }) => {
  return (
      <img
        style={{ borderRadius: "1rem" }}
        src={image}
        alt="rick_morty"
        width="100%"
        height="100%"
      />
  );
};

export default Image;
