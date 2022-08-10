import { status_received } from "./actionCreators";

export const receive_status = (data) => {
  return { type: "RECEIVE_STATUS", data };
};

export const thunk_receive_status = (socket) => {
  return function (dispatch) {
    return socket.on("ticker", (data) => {
      data.forEach((item) => {
        if (item.distance < 1000) {
          dispatch(status_received(data));
        } else {
          return socket.removeAllListeners();
        }
      });
    });
  };
};
