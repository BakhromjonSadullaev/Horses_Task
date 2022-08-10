import * as actions from "./actionTypes";

export const status_received = (data) => {
  return {
    type: actions.RECEIVE_STATUS,
    payload: {
      data,
    },
  };
};
