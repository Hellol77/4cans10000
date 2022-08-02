import React, { useState } from "react";
import ContentBox from "../components/contentBox/ContentBox";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import RandomLoading from "../components/randomLoading/RandomLoading";
const Like = () => {
  let navigate = useNavigate();
  const [randomLoading, setRandomLoading] = useState(true);
  return (
    <>
      {randomLoading === true ? (
        <>
          <RandomLoading />
        </>
      ) : (
        <>
          <Nav navigate={navigate} />
          <ContentBox></ContentBox>
          <Footer />
        </>
      )}
    </>
  );
};

export default Like;
