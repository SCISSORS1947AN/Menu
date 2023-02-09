import styles from "./Women.module.css";
import background from "../../assets/women.png";
import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { animeActions } from "../../store/animeSlice";

const Women = () => {
  const dispatch = useDispatch();
  const ButtonState = useSelector((state) => state.animation.womenButtonState);
  const tl = useRef();
  const reverseTimeLineWomen = useSelector(
    (state) => state.animation.reverseTimeLineWomen
  );

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(document.getElementById("Empress"), {
      height: "600px",
      duration: 0.5,
      ease: Power3.easeOut,
    });

    tl.current.to(document.getElementById("Emperor"), {
      height: "0px",
      duration: 0.5,
      delay: -0.5,
      ease: Power3.easeOut,
    });

    tl.current.to(document.getElementById("ContentContainer"), {
      x: "-100vw",
      duration: 0.7,
      ease: Power3.easeOut,
    });
  }, []);

  useEffect(() => {
    if (ButtonState) {
      tl.current.play();
    }

    if (reverseTimeLineWomen) {
      tl.current.reverse();
      dispatch(animeActions.reverseTimeLineWomen());
      dispatch(animeActions.toggleWomenButtonState());
    }
  }, [ButtonState, dispatch, reverseTimeLineWomen]);

  const onClick__Handler = () => {
    dispatch(animeActions.toggleWomenButtonState());
  };

  return (
    <div
      id="Empress"
      className={styles.Women}
      style={{ backgroundImage: `url(${background})` }}
      onClick={onClick__Handler}
    >
      <div>
        <h1>Empress</h1>
      </div>
    </div>
  );
};

export default Women;
