import styles from "./LandingPage.module.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useSelector, useDispatch } from "react-redux";

import Men1 from "../../assets/Men/01.png";
import Men2 from "../../assets/Men/02.png";
import Men3 from "../../assets/Men/03.png";
import Men4 from "../../assets/Men/04.png";
import Men5 from "../../assets/Men/05.png";
import Men6 from "../../assets/Men/06.png";
import Men7 from "../../assets/Men/07.png";
import Men8 from "../../assets/Men/08.png";
import Men9 from "../../assets/Men/09.png";
import Men10 from "../../assets/Men/10.png";
import Men11 from "../../assets/Men/11.png";
import Men12 from "../../assets/Men/12.png";
import Men13 from "../../assets/Men/13.png";
import Men14 from "../../assets/Men/14.png";
import Men15 from "../../assets/Men/15.png";
import Men16 from "../../assets/Men/16.png";
import Men17 from "../../assets/Men/17.png";
import Women1 from "../../assets/Women/01.png";
import Women2 from "../../assets/Women/02.png";
import Women3 from "../../assets/Women/03.png";
import Women4 from "../../assets/Women/04.png";
import Women5 from "../../assets/Women/05.png";
import Women6 from "../../assets/Women/06.png";
import Women7 from "../../assets/Women/07.png";
import Women8 from "../../assets/Women/08.png";
import Women9 from "../../assets/Women/09.png";
import Women10 from "../../assets/Women/10.png";
import Women11 from "../../assets/Women/11.png";
import Women12 from "../../assets/Women/12.png";
import Women13 from "../../assets/Women/13.png";
import Women14 from "../../assets/Women/14.png";
import Women15 from "../../assets/Women/15.png";
import Women16 from "../../assets/Women/16.png";
import Women17 from "../../assets/Women/17.png";
import Women18 from "../../assets/Women/18.png";
import Women19 from "../../assets/Women/19.png";
import Women20 from "../../assets/Women/20.png";
import { animeActions } from "../../store/animeSlice";

const Women = [
  Women1,
  Women2,
  Women3,
  Women4,
  Women5,
  Women6,
  Women7,
  Women8,
  Women9,
  Women10,
  Women11,
  Women12,
  Women13,
  Women14,
  Women15,
  Women16,
  Women17,
  Women18,
  Women19,
  Women20,
];

const Men = [
  Men1,
  Men2,
  Men3,
  Men4,
  Men5,
  Men6,
  Men7,
  Men8,
  Men9,
  Men10,
  Men11,
  Men12,
  Men13,
  Men14,
  Men15,
  Men16,
  Men17,
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const [dummyState, setDummyState] = useState(false);
  const MenButtonState = useSelector((state) => state.animation.menButtonState);
  const WomenButtonState = useSelector(
    (state) => state.animation.womenButtonState
  );

  const onClick__Handler = () => {
    if (MenButtonState) {
      dispatch(animeActions.reverseTimeLineMen());
      setDummyState(!dummyState);
    }

    if (WomenButtonState) {
      dispatch(animeActions.reverseTimeLineWomen());
      setDummyState(!dummyState);
    }
  };

  return (
    <div id="LandingPage" className={styles.LandingPage}>
      <button
        id="BackButton"
        className={styles.Back}
        onClick={onClick__Handler}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
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
        {MenButtonState &&
          Men.map((path) => (
            <SwiperSlide className={styles.slide} key={Math.random()}>
              <img src={path} alt="" />
            </SwiperSlide>
          ))}

        {WomenButtonState &&
          Women.map((path) => (
            <SwiperSlide className={styles.slide} key={Math.random()}>
              <img src={path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LandingPage;
