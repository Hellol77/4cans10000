import React from "react";
import styles from "./mainLoading.module.css";
const MainLoading = () => {
  return (
    <>
      <img
        src="/img/mainLogo.png"
        className={styles.mainLoadingImg}
        alt="4cans10000"
      />
      <div className={styles.mainLoadingText}>편의점 맥주의 모든 것!</div>
    </>
  );
};

export default MainLoading;
