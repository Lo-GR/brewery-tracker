import selectedKeg from "../../reducers/selected-keg";

describe("selectedKeg", ()=>{

  test('should return default state if there is no action type passed', () =>{
    expect(selectedKeg({}, {type: null})).toEqual({});
  });

})