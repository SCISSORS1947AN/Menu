import React, { useEffect, useRef } from "react";
import styles from "./Men.module.css";
import gsap, { Power3 } from "gsap";
import background from "../../assets/men.png";
import { useDispatch, useSelector } from "react-redux";
import { animeActions } from "../../store/animeSlice";

const Men = () => {
  const dispatch = useDispatch();
  const ButtonState = useSelector((state) => state.animation.menButtonState);
  const halfHeight = useSelector(
    (state) => state.animation.halfContentContainerHeight
  );
  const tl = useRef();
  const reverseTimeLineMen = useSelector(
    (state) => state.animation.reverseTimeLineMen
  );

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(document.getElementById("Emperor"), {
      height: "var(--contentContainer-Height)",
      duration: 0.5,
      ease: Power3.easeOut,
    });

    tl.current.to(document.getElementById("Empress"), {
      height: "0px",
      duration: 0.5,
      delay: -0.5,
      ease: Power3.easeOut,
    });

    tl.current.to(document.getElementById("ContentContainer"), {
      x: `-50%`,
      duration: 0.7,
      ease: Power3.easeOut,
    });
  }, []);

  useEffect(() => {
    if (ButtonState) {
      tl.current.play();
    }

    if (reverseTimeLineMen) {
      tl.current.reverse();
      dispatch(animeActions.reverseTimeLineMen());
      dispatch(animeActions.toggleMenButtonState());
    }
  }, [ButtonState, dispatch, reverseTimeLineMen]);

  const onClick__Handler = () => {
    dispatch(animeActions.toggleMenButtonState());
  };

  return (
    <div
      id="Emperor"
      className={styles.Men}
      style={{
        backgroundImage: `url(${background})`,
        height: `${halfHeight}px`,
      }}
      onClick={onClick__Handler}
    >
      <div>
        <h1>Emperor</h1>
      </div>
    </div>
  );
};

export default Men;
