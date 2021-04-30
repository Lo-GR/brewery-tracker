import rootReducer from "../reducers/index";
import formVisibleReducer from '../reducers/form-visible-reducer';
import kegListReducer from '../reducers/keg-list-reducer';
import * as c from "../actions/ActionTypes";
import { createStore } from 'redux';


let store = createStore(rootReducer);

describe("rootReducer", ()=>{
  let action;
  
  test("should return default state if no action is passed", ()=>{
    expect(rootReducer({}, {type: null})).toEqual({
      formVisible: false,
      masterKegList: {}
    });
  });
  test("check initial state of kegListReducer through root", ()=>{
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null}));
  })
  test("check that initial state of formvislbe matches root", ()=>{
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, {type: null}));
  })
test('check that add keg works through root', ()=>{
  action = {
    type: c.ADD_KEG,
    name: 'Green Beer',
    id: 1,
    flavor: "IPA",
    alc: 5.5,
    price: 4.4,
    brand: "GreenWay Beer",
    volume: 5
  };
  store.dispatch(action);
  expect(store.getState().masterKegList).toEqual(kegListReducer({}, action));
  })
})