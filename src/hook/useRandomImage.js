import { useState, useEffect } from "react";
import { getImagesRandomFromAPI } from "../api/imageAPI";

const useRandomImage = (seconds, pause) => {
  const [randomImages, setRandomImages] = useState([]);
  const connectApi = () => {
    getImagesRandomFromAPI()
      .then((data) => {
        setRandomImages(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    let interval = null;
    if (pause) {
      connectApi();
      interval = setInterval(() => {
        connectApi();
      }, seconds * 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause, seconds]);

  return { randomImages };
};

export default useRandomImage;
