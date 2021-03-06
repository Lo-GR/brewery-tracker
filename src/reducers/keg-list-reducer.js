import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  const {name, id, flavor, alc, price, brand, volume} = action;
  switch (action.type){
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          id: id,
          flavor: flavor,
          alc: alc,
          price: price,
          brand: brand,
          volume: volume
        }
      })
    default: return state;
  }
}