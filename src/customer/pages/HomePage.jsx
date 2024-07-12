import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import { mainCarouselData } from "../components/HomeCarousel/MainCarouselData";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/Men/men_kurta";
// import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
// import HomeProductSection from "../customer/Components/Home/HomeProductSection";
// import { sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
import Footer from "../components/Footer/Footer";
import { sareePage1 } from "../../Data/Saree/page1";
import { dressPage1 } from "../../Data/dress/page1";
import { mensShoesPage1 } from "../../Data/shoes";
import { gounsPage1 } from "../../Data/Gouns/gouns";
import { kurtaPage1} from "../../Data/Kurta/kurta";
import { lehngacholiPage2} from "../../Data/Saree/lenghaCholiPage2";


const HomePage = () => {

  return (
    // <div className="space-y-10 py-20">
    <div className="" style={{ marginTop: '-40px' }} >
      <MainCarousel  images={mainCarouselData} />
      <div className="space-y-10 flex flex-col justify-center px-5 lg:px-10">
      <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={lehngacholiPage2} sectionName={"Lengha Choli"} />
        <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
        <HomeSectionCarousel data={dressPage1} sectionName={"Dress"} />
        <HomeSectionCarousel data={gounsPage1} sectionName={"Women's Gouns"} />
        <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Kurtas"} />
      <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"} />
      </div>
    </div>
  );
};

export default HomePage;

/*<div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div>*/