import React, { useState } from "react";
import styles from "./ContentContainer.module.css";
import Men from "./men/Men";
import Women from "./women/Women";

const ContentContainer = () => {
  const [MenContainer, setMenContainer] = useState();
  const [WomenContainer, setWomenContainer] = useState();

  const getWomenContainer__Handler = (event) => {
    setWomenContainer(event.current);
  };

  const getMenContainer__Handler = (event) => {
    setMenContainer(event.current);
  };

  return (
    <div className={styles.ContentContainer}>
      <Men women={WomenContainer} MenContainer={getMenContainer__Handler} />
      <div id="lp" className={styles.lp}></div>
      <Women WomenContainer={getWomenContainer__Handler} men={MenContainer} />
    </div>
  );
};

export default ContentContainer;
