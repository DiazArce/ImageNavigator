import React, { useReducer } from "react";
import StoreContext from "./storeContext";
import StoreReducer from "./storeReducer";
import { SAVE_IMAGE, DELETE_IMAGE, PAUSE_RANDOM_IMAGE } from "../../types";
const StoreState = (props) => {

  const initialState = {
    idImageList: [],
    toggleRandomImage: false,
  };
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const saveImage = (idImage) => {
    try {
      dispatch({
        type: SAVE_IMAGE,
        payload: idImage,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteImage = (idImage)=> {
    try {
      dispatch({
        type: DELETE_IMAGE,
        payload: idImage,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  const pauseRandomImages = () => {
    try {
      dispatch({
        type: PAUSE_RANDOM_IMAGE,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <StoreContext.Provider
      value={{
        idImageList: state.idImageList,
        toggleRandomImage: state.toggleRandomImage,
        saveImage,
        deleteImage,
        pauseRandomImages,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreState;
