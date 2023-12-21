import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import Heading from "../../components/shared/Heading";
import toast from "react-hot-toast";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();
  const submitData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const bookPhoto = form.bookPhoto.value;

    const booksInfo = {
      bookName,
      authorName,
      rating,
      category,
      bookPhoto,
      description,
      quantity,
    };

    axiosSecure
      .post(`/admin/create-book`, booksInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Book added successfully");
          form.reset();
          // refetch();
        }
      })
      .catch((err) => {
        toast.error("Book added failed");
        console.log(err);
      });
  };
  return (
    <div className="pt-20">
      <Heading title={"Add Product"} span={"Add"} headings={"Product"} />
      <form onSubmit={submitData} className="font-Cabin ">
        <div className="flex gap-8">
          <div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Book Name
              </label>
              <input
                name="bookName"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Book Name"
              />
            </div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Author Name
              </label>
              <input
                name="authorName"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Author Name"
              />
            </div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Quantity
              </label>
              <input
                name="quantity"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Book Quantity"
              />
            </div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Description
              </label>
              <input
                name="description"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book Description"
              />
            </div>
          </div>
          <div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Rating
              </label>
              <input
                name="rating"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book Rating"
              />
            </div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Select Category
              </label>
              <br />

              <select
                name="category"
                id=""
                className="border border-solid border-primaryColor w-1/2 px-5 py-2 rounded-lg"
              >
                {/*   {category.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Book Photo url
              </label>
              <br />
              <input
                name="bookPhoto"
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book photo url"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn bg-primaryColor text-white hover:text-primaryColor hover:bg-transparent border-solid border-transparent border hover:border-primaryColor mt-9 text-center"
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
