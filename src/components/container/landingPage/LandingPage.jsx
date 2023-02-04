import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./LandingPage.module.css";

const LandingPage = (props) => {
  const [DomReady, setDomReady] = React.useState(null);

  useEffect(() => {
    setDomReady(document.getElementById("lp"));
  }, [DomReady]);

  return (
    DomReady &&
    ReactDOM.createPortal(
      <div className={styles.LandingPage}>
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect={"fade"}
          speed={800}
          slidesPerView={1}
          loop
          className={styles.slider}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {props.imagePaths.map((path) => (
            <SwiperSlide className={styles.slide} key={Math.random()}>
              <img src={path} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>,
      DomReady
    )
  );
};

export default LandingPage;
