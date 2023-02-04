import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import styles from "./Men.module.css";
import men from "../../../assets/men.png";

import _1 from "../../../assets/Men/01.png";
import _2 from "../../../assets/Men/02.png";
import _3 from "../../../assets/Men/03.png";
import _4 from "../../../assets/Men/04.png";
import _5 from "../../../assets/Men/05.png";
import _6 from "../../../assets/Men/06.png";
import _7 from "../../../assets/Men/07.png";
import _8 from "../../../assets/Men/08.png";
import _9 from "../../../assets/Men/09.png";
import _10 from "../../../assets/Men/10.png";
import _11 from "../../../assets/Men/11.png";
import _12 from "../../../assets/Men/12.png";
import _13 from "../../../assets/Men/13.png";
import _14 from "../../../assets/Men/14.png";
import _15 from "../../../assets/Men/15.png";
import _16 from "../../../assets/Men/16.png";
import _17 from "../../../assets/Men/17.png";
import LandingPage from "../landingPage/LandingPage";

const imagePaths = [
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  _17,
];

const Men = (props) => {
  const menContainer = useRef(null);
  props.MenContainer(menContainer);
  const [ButtonState, setButtonState] = useState(false);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(menContainer.current, {
      height: "100%",
      duration: 0.00001,
      ease: Power3.easeOut,
    });

    tl.current.to(props.women, {
      height: "0%",
      fontSize: "0%",
      display: "none",
      duration: 0.5,
      ease: Power3.easeOut,
    });

    tl.current.to([menContainer.current, document.getElementById("lp")], {
      x: "0",
      duration: 1,
      ease: Power3.easeOut,
    });
  }, [props.women]);

  useEffect(() => {
    if (ButtonState) {
      tl.current.play();
    }
  }, [ButtonState]);

  const onClick__Handler = () => {
    setButtonState(true);
  };

  return (
    <div
      className={styles.Men}
      style={{ backgroundImage: `url(${men})` }}
      ref={menContainer}
      onClick={onClick__Handler}
    >
      <div>
        <h1>Emperor</h1>
      </div>
      {ButtonState && <LandingPage imagePaths={imagePaths} />}
    </div>
  );
};

export default Men;
