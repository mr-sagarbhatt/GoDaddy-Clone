import Header from "../../components/Header/Header";
import SubNav from "../../components/main/product/SubNav/SubNav";
import ProductMarquee from "../../components/main/product/ProductMarquee/ProductMarquee";
import CardContainer from "../../components/main/product/CardContainer/CardContainer";
import FaqSection from "../../components/sections/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";

const Product = () => {
  return (
    <>
      <Header></Header>
      <main id='main'>
        <SubNav></SubNav>
        <ProductMarquee></ProductMarquee>
        <CardContainer></CardContainer>
      </main>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
};

export default Product;
