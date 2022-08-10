import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { thunk_receive_status } from "./redux/status/thunk";
import { getStatus } from "./utils/selectors";
import HorseCard from "./components/HorseCard";

function App() {
  const status = useSelector(getStatus);

  let dispatch = useDispatch();

  useEffect(() => {
    let socket = io("http://localhost:3002");
    socket.emit("start");

    dispatch(thunk_receive_status(socket));

    return () => socket.disconnect();
  }, [dispatch]);

  console.log(status);

  return (
    <div className="App">
      {status?.data?.map((horse) => {
        return (
          <HorseCard
            id={uuidv4()}
            name={horse.name}
            distance={horse.distance}
          />
        );
      })}
    </div>
  );
}

export default App;
