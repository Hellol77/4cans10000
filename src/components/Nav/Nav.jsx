import React from "react";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.back}><FontAwesomeIcon icon={faAngleLeft} size="1x"/></div>
        {/* <div className={styles.menuBar}>
          <FontAwesomeIcon icon={faBars} />
        </div> */}
      </div>
    </>
  );
};

export default Nav;
