import rootReducer from "../reducers/index";
import formVisibleReducer from '../reducers/form-visible-reducer';
import kegListReducer from '../reducers/keg-list-reducer';
import { createStore } from 'redux';


let store = createStore(rootReducer);

describe("rootReducer", ()=>{
  
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
})