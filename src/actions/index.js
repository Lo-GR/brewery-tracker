import * as c from "./ActionTypes";

export const addKeg = kegData => {
  const {name, id, flavor, alc, price, brand, volume} = kegData;
  return {
    type: c.ADD_KEG,
    name: name,
    id: id,
    flavor: flavor,
    alc: alc,
    price: price,
    brand: brand,
    volume: volume
  };
}

export const toggle = () =>{
  return {type: c.TOGGLE_FORM }
}

export const selectKeg = (id) => {
  return {
    type: c.SELECT_KEG,
    id: id
  }
}