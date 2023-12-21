import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-center">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <p className="text-xl text-indigo-600">$ 250</p>
        <div className="card-actions justify-end">
          <div>
            <Button value={"Details"} />
          </div>
          <div>
            <Button value={"Add to cart"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
