import type { HeroFrame } from "../../types/types";
import styles from "./BasicCard.module.css";

interface BasicCardProps {
  data: HeroFrame;
  index: number;
}

function BasicCard({ data, index }: BasicCardProps) {
  return (
    <div
      className={styles.card}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <img src={data.icon} className={styles.icon} alt="icon" />
      <div className={styles.bodyCard}>
        <h2>{data.lable}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default BasicCard;
