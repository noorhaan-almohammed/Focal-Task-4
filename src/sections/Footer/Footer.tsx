import { Link } from "react-router-dom";
import type { FooterType } from "../../types/types";
import styles from "./Footer.module.css";

function Footer({ FooterData }: { FooterData: FooterType }) {
  return (
    <div className={styles.footer}>
      <div className={styles.prefs}>
        
        <div className={styles.siteInfo}>
          <img src={FooterData.logo} alt="logo" className={styles.logo} />
          <p>{FooterData.description}</p>
        </div>

        <div className={styles.list}>
          <h3>{FooterData.list_1.title}</h3>
          {FooterData.list_1.items.map((item) => (
            <Link to={item.path}>{item.tag}</Link>
          ))}
        </div>
        
        <div className={styles.list}>
          <h3>{FooterData.list_2.title}</h3>
          {FooterData.list_2.items.map((item) => (
            <Link to={item.path}>{item.tag}</Link>
          ))}
        </div>

        <div className={styles.location}>
          <h3>{FooterData.list_3.title}</h3>
          <p>{FooterData.list_3.location}</p>
          <div className={styles.socialContainer}>
          {
            FooterData.list_3.social_media_icons.map((item) => (
            <Link to={item.path} className={styles.social}>
                <img src={item.icon} alt="social_icon"/>
                </Link>
          ))
          }
          </div>
        </div>
      </div>
      <div className={styles.br}/>
      <div className={styles.rightsAndTerms}>
        <Link to={FooterData.copyRight.path} className={styles.rights}>{FooterData.copyRight.tag} </Link>
        <div className={styles.terms}>
            <Link to={FooterData.copyRight.path} >{FooterData.policy.tag}</Link>
            <Link to={FooterData.copyRight.path}>{FooterData.term.tag}</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
