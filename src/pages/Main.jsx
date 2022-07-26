import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import MainLoading from "../components/mainLoading/MainLoading";
import LoginBox from "../components/loginBox/LoginBox";
const Main = () => {
  const [loadingTimer, setLoadingTimer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimer(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Nav />

      {loadingTimer === true ? (
        //2초간 로딩
        <>
          <MainLoading />
        </>
      ) : (
        <>
          <LoginBox />
        </>
      )}
    </>
  );
};

export default Main;
