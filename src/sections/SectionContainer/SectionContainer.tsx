import styles from "./SectionContainer.module.css";
import type { sectionData } from "../../types/types";

function SectionContainer({
  title,
  description,
  children,
  className,
}: sectionData) {
  return (
    <div className={styles.section}>
      <div className={styles.headerSection}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={` ${className || ""}`}>{children}</div>
    </div>
  );
}

export default SectionContainer;
