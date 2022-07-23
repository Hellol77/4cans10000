import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import MainLoading from "../components/mainLoading/MainLoading";

const Main = ({ changeBackGroundColor }) => {
  const [loadingTimer, setLoadingTimer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeBackGroundColor();
      setLoadingTimer(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <Nav />
      {loadingTimer === true ? (
        <>
          <MainLoading />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
