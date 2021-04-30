import kegListReducer from "../../reducers/keg-list-reducer";

describe('kegListReducer', () => {
  test('should return default state if there is no action type passed', () =>{
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});