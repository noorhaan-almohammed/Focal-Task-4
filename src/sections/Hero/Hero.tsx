import hero from "/images/home_hero.png";
import styles from "./Hero.module.css";
import type { HeroData } from "../../types/types";
import React from "react";

interface HeroProps {
  heroData: HeroData;
}

function Hero({ heroData }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          {heroData.title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className={styles.pref}>
          {heroData.pref.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className={styles.frames}>
        {heroData.frames.map((frame, index) => (
          <div key={index} className={styles.frame} >
            <div className={styles.icon}>
              <img src={frame.icon} alt={frame.lable} />
            </div>

            <div>
              <h4>{frame.lable}</h4>
              <p>{frame.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={hero} alt="hero" className={styles.img} />
    </div>
  );
}

export default Hero;
