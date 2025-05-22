import { useEffect, useState } from "react";
import type { GallaryData as GallaryItem } from "../../types/types";
import styles from "./Gallary.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallary({ GallaryData }: { GallaryData: GallaryItem[] }) {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const handleButtonClick = (id: number) => {
    setActiveBtn(id);
  };

  const activeImages =
    GallaryData.find((item) => item.id === activeBtn)?.img || [];

  useEffect(() => {
    AOS.refresh();
  }, [activeBtn]);

  return (
    <>
      <ul className={styles.menu}>
        {GallaryData.map((data) => (
          <li
            key={data.id}
            className={activeBtn === data.id ? styles.active : ""}
            onClick={() => handleButtonClick(data.id)}
          >
            {data.name}
          </li>
        ))}
      </ul>

      <div className={styles.album}>
        {activeImages.map((src, index) => (
          <div
            key={src + index}
            className={styles.img}
            data-aos="flip-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
          >
            <img src={src} alt={`img_${index}`} className={styles.image} />
            <div className={styles.btn}>
              <button>Featured</button>
              <button>3D</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallary;
