import { useForm } from "react-hook-form";
import Heading from "../../components/shared/Heading";
import { useState } from "react";
import AllCategoryLists from "./AllCategoryLists";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useQueryCategory from "../../Hooks/useQueryCategory";

const CategoryList = () => {
  const { data, isLoading, refetch } = useQueryCategory();
  const [imgUrl, setImgUrl] = useState(null);

  const axios = useAxios();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImgUrl(URL.createObjectURL(file));
  };

  const handleDataSend = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.categoryName.value;
    const image = from.categoryPhoto.files[0];

    const data = { image, name };
    axios
      .post(`/admin/create-category`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      })
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        }
        if (res.data.insertedId) {
          toast.success("Category added successfully");
          from.reset();
          refetch();
        }
      })
      .catch((err) => toast.error("category added failed"));
  };

  return (
    <div className="pt-20">
      <Heading title={"Add Category"} span={"Add"} headings={"Category"} />
      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleDataSend} className="font-Cabin ">
          <div className="">
            <div>
              <div className="w-[280px] md:w-[500px] mb-3">
                <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                  Add Category
                </label>
                <input
                  className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                  placeholder="Enter the Book Name"
                  name="categoryName"
                />
              </div>

              <div className="w-[280px] md:w-[500px] mb-3">
                <div className="py-2 shrink-0">
                  <img
                    className="object-cover w-32 h-32 rounded-lg border border-solid border-primaryColor"
                    src={`${
                      imgUrl
                        ? imgUrl
                        : "https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg"
                    }`}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block pt-2">
                  <span className="sr-only ">Choose Category photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-700 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                    onChange={handleFileChange}
                    name="categoryPhoto"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="text-left">
            <button
              className="btn bg-primaryColor text-white hover:text-primaryColor hover:bg-transparent border-solid border-transparent border hover:border-primaryColor mt-9 text-center"
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
        <div className="hidden lg:inline-block">
          <AllCategoryLists
            data={data}
            isLoading={isLoading}
            refetch={refetch}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
