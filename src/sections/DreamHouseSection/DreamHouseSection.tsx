import type { DreamHouseProps } from "../../types/types";
import styles from "./DreamHouseSection.module.css";

function DreamHouseSection({ title, description }: DreamHouseProps) {
  return (
    <div className={styles.section}>
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DreamHouseSection;
