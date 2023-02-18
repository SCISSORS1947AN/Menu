import React, { useEffect } from "react";
import Men from "../men/Men";
import Women from "../women/Women";
import LandingPage from "../landingPage/LandingPage";
import styles from "./Container.module.css";
import { animeActions } from "../../store/animeSlice";
import { useDispatch } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      animeActions.halfContentContainerHeight(
        document.getElementById("ContentContainer").offsetHeight / 2
      )
    );
  }, [dispatch]);

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
