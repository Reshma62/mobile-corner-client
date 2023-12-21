import ProductDetailsCard from "../../components/Product/ProductDetailsCard";
import RelatedProduct from "../../components/Product/RelatedProduct";
import Container from "../../components/Shared/Container";
const ProductDetails = () => {
  return (
    <Container>
      <ProductDetailsCard />
      <RelatedProduct />
    </Container>
  );
};

export default ProductDetails;
