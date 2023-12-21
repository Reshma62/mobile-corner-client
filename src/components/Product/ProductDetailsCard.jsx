import { BsCart4 } from "react-icons/bs";
import { BiSolidStar, BiStar, BiShuffle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Rating from "react-rating";

const ProductDetailsCard = () => {
  return (
    <div className=" flex items-center gap-8 py-20">
      <div className="basis-1/2 overflow-hidden py-5 rounded-xl border border-solid border-slate-200">
        <img src={"ProductImg"} alt="" className={` mx-auto w-[646px] }`} />
      </div>
      <div className="basis-1/2">
        <div className="px-6 py-6 space-y-4">
          <h3 className="text-4xl  font-black text-heading hover:text-primary">
            Chobani Complete Vanilla Greek Yogurt
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            reiciendis velit perspiciatis, minima tenetur magnam repellat veniam
            sint dolor aliquid ipsum architecto. Eveniet id libero debitis ipsum
            eos maxime minus?
          </p>

          <p>
            <Rating
              initialRating={3.5}
              readonly
              fullSymbol={<BiSolidStar className="text-yellow-500" />}
              emptySymbol={<BiStar className="text-paragaraph" />}
            />
            <span className="text-paragaraph ml-2">(52)</span>
          </p>

          <div className="flex gap-3 items-center">
            <p className="font-black text-7xl text-primary">{240}</p>
            <p className="line-through text-3xl text-paragaraph font-bold">
              $245
            </p>
          </div>
          <div className="flex gap-6">
            <input
              type="number"
              defaultValue={1}
              className="border-2 w-[60px] border-solid rounded-xl border-primary  outline-0 py-3 px-2.5"
            />
            <button className="flex items-center gap-2.5 bg-[#def9ec] hover:bg-primary text-primary hover:text-white font-bold rounded-md px-4 py-2 duration-500">
              <BsCart4 className="text-lg" /> Add to cart
            </button>
            <button className="flex items-center gap-2.5 bg-[#def9ec] hover:bg-primary text-primary hover:text-white font-bold rounded-md px-5 py-2 duration-500">
              <AiOutlineHeart className="text-lg" />
            </button>
            <button className="flex items-center gap-2.5 bg-[#def9ec] hover:bg-primary text-primary hover:text-white font-bold rounded-md px-5 py-2 duration-500">
              <BiShuffle className="text-lg" />
            </button>
          </div>
          <hr />
          <div>
            <p>Category</p>
            <p>Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
