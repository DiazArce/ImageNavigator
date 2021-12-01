import { KEY_LOCALSTORAGE } from '../constants';
export const checkLocalStorage = (idImage=-1) => {
  let arrayOfIdsParsed = []
  const arrayOfIds = localStorage.getItem(KEY_LOCALSTORAGE);
  
  if(arrayOfIds){
    arrayOfIdsParsed = JSON.parse(arrayOfIds)
  }
  const isOk = arrayOfIds && arrayOfIdsParsed ? true: false;
  const imagesIndexFounded = arrayOfIdsParsed.find(
    (id) => id === idImage
  );
    return {
        isOk,
        arrayOfIdsParsed,
        imagesIndexFounded,
    }
}