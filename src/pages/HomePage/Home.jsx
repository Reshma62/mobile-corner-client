import Banner from "../../components/Home/Banner";
import HotDealProducts from "../../components/Home/HotDealProducts";
import Offer from "../../components/Home/Offer";
import ShopByBrand from "../../components/Home/ShopByBrand";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByBrand />
      <Offer />
      <HotDealProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
