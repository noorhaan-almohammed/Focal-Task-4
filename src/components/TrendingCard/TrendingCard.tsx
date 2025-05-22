import type { TrendingCardData } from "../../types/types";
import styles from "./TrendingCard.module.css";

function TrendingCard({ img, price, title, location,index }: TrendingCardData) {
  return (
    <div className={styles.card}
     data-aos="flip-right" 
      data-aos-delay={index * 100} 
      data-aos-duration="700">
      <img src={img} alt="trend_img" className={styles.img}></img>
      <div className={styles.body}>
        <span>${price}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.footer}>
        <img
          src="/icons/location.svg"
          className={styles.icon}
          alt="location_icon"
        />
        <span>{location}</span>
      </div>
    </div>
  );
}

export default TrendingCard;
