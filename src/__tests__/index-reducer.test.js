import rootReducer from "../reducers/index";
import formVisibleReducer from '../reducers/form-visible-reducer';
import kegListReducer from '../reducers/keg-list-reducer';
import selectedKegReducer from '../reducers/selected-keg';
import * as c from "../actions/ActionTypes";
import * as a from "../actions/index";
import { createStore } from 'redux';


let store = createStore(rootReducer);

describe("rootReducer", ()=>{
  let action;
  
  test("should return default state if no action is passed", ()=>{
    expect(rootReducer({}, {type: null})).toEqual({
      formVisible: false,
      masterKegList: {},
      selectedKeg: ""
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
  test('check that toggle form works through root', ()=>{
    action = a.toggle();
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  })
  test("check initial state of kegListReducer through root", ()=>{
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null}));
  })
})