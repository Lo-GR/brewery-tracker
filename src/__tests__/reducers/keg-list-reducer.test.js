import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "../actions/ActionTypes";

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Green Beer',
    id: 1,
    flavor: "IPA",
    alc: 5.5,
    price: 4.4,
    brand: "GreenWay Beer"
  }
  test('should return default state if there is no action type passed', () =>{
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', ()=>{
    const {name, id, flavor, alc, price, brand} = kegData;
    action = {
      
    }
  })
});