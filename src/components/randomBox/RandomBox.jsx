import React from "react";

import styles from "./randomBox.module.css";
const RandomBox = (props) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.title}>오늘의 맥주는?</div>
      <img src="/img/example.png" alt="" className={styles.img} />
      <div className={styles.detail}>
        <div className={styles.degree}>
          <p className={styles.text}>Alchol degree</p>
          <p className={styles.degreeNum}>4.5%</p>
        </div>
        
      </div>

      <div className={styles.name}>ㄴㄴㄴㄴㅇㅇㅇㅇㅇ</div>
      <div className={styles.description}>
        제제제제제젲제제제제제제제젲제제제제제제제제
      </div>
      <button type="button" className={styles.button}>
        다시하기
      </button>
    </div>
  );
};

export default RandomBox;
