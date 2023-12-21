import Container from "../Shared/Container";
import ProductCard from "../Shared/ProductCard";
import Title from "./Title";

const HotDealProducts = () => {
  return (
    <Container>
      <Title title={"Featured Products"} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default HotDealProducts;
