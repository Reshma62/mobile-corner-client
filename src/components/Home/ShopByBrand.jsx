import { Link } from "react-router-dom";
import Walton from "../../assets/Walton.jpg";
import Container from "../Shared/Container";
import Title from "./Title";

const ShopByBrand = () => {
  return (
    <Container>
      <Title title={"Shop by brand"} />
      <div className="grid grid-cols-6 py-10">
        <Link
          to={""}
          className="border shadow-xl border-solid text-center py-2 border-indigo-600 rounded-lg"
        >
          <img className="w-32 mx-auto" src={Walton} alt="walton" />
          <p className="text-indigo-800 font-bold">Watlton</p>
        </Link>
      </div>
    </Container>
  );
};

export default ShopByBrand;
