import Hero from "../sections/Hero/Hero.tsx"
import {
  DreamHouseData,
  GallaryRawData,
  GalluryData,
  heroData,
  TrendCards,
  TrendingData,
  Workcards,
  worksData,
} from "../dataContent/Data.tsx";
import SectionContainer from "../sections/SectionContainer/SectionContainer.tsx";
import styles from "../sections/SectionContainer/SectionContainer.module.css";
import DreamHouseSection from "../sections/DreamHouseSection/DreamHouseSection.tsx";
import Gallary from "../components/Gallary/Gallary.tsx";
import TrendingCard from "../components/TrendingCard/TrendingCard.tsx";
import type { HeroFrame } from "../types/types.ts";
import BasicCard from "../components/BasicCard/BasicCard.tsx";

function Home() {
  return (
    <>
      <Hero heroData={heroData} />
      <SectionContainer
        title={worksData.title}
        description={worksData.description}
        className={styles.worksSection}
      >
        {Workcards.map((card: HeroFrame, index: number) => (
          <BasicCard key={index} data={card} index={index} />
        ))}
      </SectionContainer>
      <DreamHouseSection
        title={DreamHouseData.title}
        description={DreamHouseData.description}
      />
      <SectionContainer
        title={TrendingData.title}
        description={TrendingData.description}
        className={styles.trendingSection}
      >
        {TrendCards.map((card, index) => (
          <TrendingCard
            key={index}
            img={card.img}
            price={card.price}
            title={card.title}
            location={card.location}
            index={index}
          />
        ))}
      </SectionContainer>

      <SectionContainer
        title={GalluryData.title}
        description={GalluryData.description}
        className={styles.gallurySection}
      >
        <Gallary GallaryData={GallaryRawData} />
      </SectionContainer>
    </>
  );
}

export default Home;
