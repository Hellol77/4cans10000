import React from "react";
import styles from "./likeBox.module.css";
import BeerBox from "../beerBox/beerBox";
const LikeBox = () => {
  return (
    <>
      <div className={styles.mainBox}>
        <BeerBox />
        <BeerBox />
        <BeerBox />
        <BeerBox />
        <BeerBox />
        <BeerBox />
        <BeerBox />
       
      </div>
    </>
  );
};

export default LikeBox;
