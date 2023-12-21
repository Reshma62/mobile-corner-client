import Container from "../Shared/Container";
import Offer1 from "../../assets/offer1.webp";
import Offer2 from "../../assets/offer2.jpg";
const Offer = () => {
  return (
    <Container>
      <div className="flex justify-between gap-20 overflow-hidden ">
        <div className="w-full">
          <img
            className="hover:scale-110 object-cover transition-all duration-600 w-full h-[220px]"
            src={Offer1}
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            className="hover:scale-110 h-[220px] object-cover transition-all duration-600 w-full"
            src={Offer2}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Offer;
