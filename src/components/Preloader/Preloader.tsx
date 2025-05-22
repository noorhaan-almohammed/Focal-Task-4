import Lottie from "lottie-react";
import animationData from "../../assets/house_preloder.json"
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.overlay}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Preloader;
