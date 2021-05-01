import * as actions from './../../actions/index';
import * as c from "../../actions/ActionTypes";

describe('help queue actions', () =>{
    const kegData = {
      name: 'Green Beer',
      id: 1,
      flavor: "IPA",
      alc: 5.5,
      price: 4.4,
      brand: "GreenWay Beer",
      volume: 5
    }
  it('addKeg should create ADD_KEG action', ()=>{
    expect(actions.addKeg(kegData)).toEqual({
      type: c.ADD_KEG,
      name: 'Green Beer',
      id: 1,
      flavor: "IPA",
      alc: 5.5,
      price: 4.4,
      brand: "GreenWay Beer",
      volume: 5
    })
  })
  it('toggle should create TOGGLE_FORM action', ()=>{
    expect(actions.toggle()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
  it('selectKeg should create SELECT_KEG action', ()=>{
    expect(actions.selectKeg(1)).toEqual({
      type: "SELECT_KEG",
      id: 1
    })
  })
})