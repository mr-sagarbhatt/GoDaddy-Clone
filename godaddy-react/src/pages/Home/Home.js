import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Marquee from "../../components/main/Marquee/Marquee";
import ProductGrid from "../../components/main/ProductGrid/ProductGrid";
import FeatureContent from "../../components/main/FeatureContent/FeatureContent";
import PromotionAd from "../../components/main/PromotionAd/PromotionAd";
import GuidesSection from "../../components/sections/GuidesSection/GuidesSection";
import FaqSection from "../../components/sections/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Search></Search>
      <main className='main'>
        <Marquee></Marquee>
        <ProductGrid></ProductGrid>
        <FeatureContent></FeatureContent>
        <PromotionAd></PromotionAd>
      </main>
      <GuidesSection></GuidesSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
