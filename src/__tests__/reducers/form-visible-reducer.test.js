import formVisibleReducer from "../../reducers/form-visible-reducer";
import * as a from "../../actions/index";

describe('formVisibleReducer', ()=>{
  test('should return default state if no action', ()=>{
    expect(formVisibleReducer(false, { type: null})).toEqual(false);
  })
  test('should toggle form visibility state to true', ()=>{
    expect(formVisibleReducer(false, a.toggle())).toEqual(true);
  })
})