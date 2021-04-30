import * as actions from './../../actions/index';
import * as c from "../../actions/ActionTypes";

describe('help queue actions', () =>{
    const kegData = {
      name: 'Green Beer',
      id: 1,
      flavor: "IPA",
      alc: 5.5,
      price: 4.4,
      brand: "GreenWay Beer"
    }
  it('addKeg should create ADD_KEG action', ()=>{
    expect(actions.addKeg(kegData)).toEqual({
      type: c.ADD_KEG,
      name: 'Green Beer',
      id: 1,
      flavor: "IPA",
      alc: 5.5,
      price: 4.4,
      brand: "GreenWay Beer"
    })
  })
})