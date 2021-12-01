import {
  SAVE_IMAGE,
  DELETE_IMAGE,
  PAUSE_RANDOM_IMAGE,
} from "../../types/index";
import { KEY_LOCALSTORAGE } from "../../constants";
import { checkLocalStorage } from "../../utils";
const StoreReducer = (state, action) => {
  let nextState;
  const { isOk, imagesIndexFounded, arrayOfIdsParsed } = checkLocalStorage(
    action.payload
  );
  switch (action.type) {
    case SAVE_IMAGE:
      let updatedList = [];
      if (isOk) {
        if (imagesIndexFounded) return state;
        updatedList = [...arrayOfIdsParsed, action.payload];
      } else {
        updatedList = [...state.idImageList, action.payload];
      }
      nextState = {
        ...state,
        idImageList: updatedList,
      };

      localStorage.setItem(
        KEY_LOCALSTORAGE,
        JSON.stringify(nextState.idImageList)
      );
      return nextState || state;

    case DELETE_IMAGE:
      if (isOk && imagesIndexFounded) {
        nextState = {
          ...state,
          idImageList: arrayOfIdsParsed.filter(
            (id) => id !== imagesIndexFounded
          ),
        };
        localStorage.setItem(
          KEY_LOCALSTORAGE,
          JSON.stringify(nextState.idImageList)
        );
      }
      return nextState || state;

    case PAUSE_RANDOM_IMAGE:
      return {
        ...state,
        toggleRandomImage: !state.toggleRandomImage,
      };
    default:
      return state;
  }
};
export default StoreReducer;
