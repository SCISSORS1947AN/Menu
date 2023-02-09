import React from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import google from "../../assets/google.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.offer}>
        <h2>To Avail EXTRA 10% OFF...!!!</h2>
        <a href="https://www.instagram.com/scissors_1947/" target="_blank" rel="noreferrer">
          <button>
            <img src={instagram} alt="" />
            Follow Us
          </button>
        </a>
        <a href="https://g.page/r/CQcsqlWiTNE7EB0/review" target="_blank" rel="noreferrer">
          <button>
            <img src={google} alt="" />
            Rate Us!!!
          </button>
        </a>
      </div>
      <div className={styles.socials}>
        <div>
          <a href="https://www.instagram.com/scissors_1947/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" />
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=917598760506" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <p>
        <span>Developed by</span>{" "}
        <a href="https://linktr.ee/thamizhiniyancs" target="_blank" rel="noreferrer">Thamizhiniyan C S</a> &#169;
        2023
      </p>
    </div>
  );
};

export default Footer;
