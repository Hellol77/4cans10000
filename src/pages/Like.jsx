import React from "react";
import LikeBox from "../components/LikeBox/LikeBox";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Like = () => {
  let navigate = useNavigate();
  return (
    <>
      <Nav navigate={navigate} />
      <LikeBox />
      <Footer />
    </>
  );
};

export default Like;
