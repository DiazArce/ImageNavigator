/** API NAME : RICK AND MORTY 
 *  API url : https://rickandmortyapi.com/api/
 *  total Number of images : 826
 *  page web : https://rickandmortyapi.com/
*/
import Axios from 'axios'
import { MIN_NUMBER_IMAGES, MAX_NUMBER_IMAGES, RANGE } from '../constants';

export  function getImagesRandomFromAPI() {
  const arrayOfIds = generateIds(MIN_NUMBER_IMAGES,MAX_NUMBER_IMAGES,RANGE)
  const imagesRandom = getImagesByArrayOfId(arrayOfIds).then(res=>res).catch(error=>console.log(error))
  return imagesRandom;
}

export function getImagesByArrayOfId(arrayOfId) {
  const url = `https://rickandmortyapi.com/api/character/${arrayOfId}`;
  return Axios.get(url).then((res)=>{
    if(!(res.data instanceof Array)){
      let arrayData = []
      arrayData.push(res.data)
      return arrayData
    }
    return res.data
  }).catch(error => console.log(error))
}

export function  generateIds(min,max,count) {
  let idList = []
  for(let i=0; i<count; i++){
    const randomNumber = getRandomNumberByRange(min,max)
    if(!idList.includes(randomNumber)){
      idList.push(randomNumber)
    }
  }
  return idList;
}
export function getRandomNumberByRange(min, max){
  return Math.floor((Math.random() * (max - min + 1)) + min);
}