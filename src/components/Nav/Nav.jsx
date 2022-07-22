import React from "react";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>네캔만원</div>
        <div className={styles.menuBar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Nav;
