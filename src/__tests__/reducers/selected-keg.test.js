import selectedKeg from "../../reducers/selected-keg";
import * as a from "../../actions/index";

describe("selectedKeg", ()=>{

  test('should return default state if there is no action type passed', () =>{
    expect(selectedKeg({}, {type: null})).toEqual({});
  });
  test('should change selected keg to id passed in', ()=>{
    expect(selectedKeg("", a.selectKeg(1))).toEqual(1);
  })
})