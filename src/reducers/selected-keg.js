import * as c from "../actions/ActionTypes";

export default (state = "", action) =>{
  switch (action.type){
  case c.SELECT_KEG:
    return action.id;
  default: 
    return state;
  }
}