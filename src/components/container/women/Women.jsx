import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import styles from "./Women.module.css";
import LandingPage from "../landingPage/LandingPage";
import women from "../../../assets/women.png";
import _1 from "../../../assets/Women/01.png";
import _2 from "../../../assets/Women/02.png";
import _3 from "../../../assets/Women/03.png";
import _4 from "../../../assets/Women/04.png";
import _5 from "../../../assets/Women/05.png";
import _6 from "../../../assets/Women/06.png";
import _7 from "../../../assets/Women/07.png";
import _8 from "../../../assets/Women/08.png";
import _9 from "../../../assets/Women/09.png";
import _10 from "../../../assets/Women/10.png";
import _11 from "../../../assets/Women/11.png";
import _12 from "../../../assets/Women/12.png";
import _13 from "../../../assets/Women/13.png";
import _14 from "../../../assets/Women/14.png";
import _15 from "../../../assets/Women/15.png";
import _16 from "../../../assets/Women/16.png";
import _17 from "../../../assets/Women/17.png";
import _18 from "../../../assets/Women/18.png";
import _19 from "../../../assets/Women/19.png";
import _20 from "../../../assets/Women/20.png";

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
  _18,
  _19,
  _20,
];

const Women = (props) => {
  const womenContainer = useRef(null);
  props.WomenContainer(womenContainer);

  const [ButtonState, setButtonState] = useState(false);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(womenContainer.current, {
      height: "100%",
      duration: 0.00001,
      ease: Power3.easeOut,
    });

    tl.current.to(props.men, {
      height: "0%",
      duration: 0.5,
      ease: Power3.easeOut,
    });

    tl.current.to([womenContainer.current, document.getElementById("lp")], {
      x: "0",
      duration: 1,
      ease: Power3.easeOut,
    });
  }, [props.men]);

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
      className={styles.Women}
      style={{ backgroundImage: `url(${women})` }}
      ref={womenContainer}
      onClick={onClick__Handler}
    >
      <div>
        <h1>Empress</h1>
      </div>
      {ButtonState && <LandingPage imagePaths={imagePaths} />}
    </div>
  );
};

export default Women;
