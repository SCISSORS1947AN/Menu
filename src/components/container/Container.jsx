import React from "react";
import Men from "../men/Men";
import Women from "../women/Women";
import LandingPage from "../landingPage/LandingPage";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div id="ContentContainer" className={styles.contentContainer}>
      <div className={styles.genderSelector}>
        <Men />
        <Women />
      </div>
      <LandingPage />
    </div>
  );
};

export default Container;
