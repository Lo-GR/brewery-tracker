import rootReducer from "../reducers/index";
import formVisibleReducer from '../reducers/form-visible-reducer';
import kegListReducer from '../reducers/keg-list-reducer';
import { createStore } from 'redux';



describe("rootReducer", ()=>{
  
  test("should return default state if no action is passed", ()=>{
    expect(rootReducer({}, {type: null})).toEqual({
      formVisible: false,
      masterKegList: {}
    });
  });
})