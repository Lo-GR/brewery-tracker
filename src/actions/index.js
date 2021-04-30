import * as c from "./ActionTypes";

export const addKeg = kegData => {
  const {name, id, flavor, alc, price, brand} = kegData;
  return {
    type: c.ADD_KEG,
    name: name,
    id: id,
    flavor: flavor,
    alc: alc,
    price: price,
    brand: brand
  };
}