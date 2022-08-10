import * as actions from "./actionTypes";
let statusInitialState = [];

export default function coursesReducer(state = statusInitialState, action) {
  switch (action.type) {
    case actions.RECEIVE_STATUS:
      return (state = action.payload);

    default:
      return state;
  }
}
