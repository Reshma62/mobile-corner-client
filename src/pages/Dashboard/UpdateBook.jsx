import { useForm } from "react-hook-form";
import Heading from "../../components/shared/Heading";
import { useState } from "react";

import toast from "react-hot-toast";
import useQueryCategory from "../../Hooks/useQueryCategory";
import useAllBooksQuery from "../../Hooks/useAllBooksQuery";
import Loading from "../../components/shared/Loading";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const UpdateBook = () => {
  const axios = useAxios();
  const { isLoading, data: categorys } = useQueryCategory();
  const { refetch } = useAllBooksQuery();
  const {
    _id,
    bookName,
    authorName,
    rating,
    category,
    description,
    quantity,
    bookPhoto,
  } = useLoaderData();

  console.log(_id);
  if (isLoading) {
    return <Loading />;
  }
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
    console.log(booksInfo, 34);
    axios
      .put(`/admin/update-book/${_id}`, booksInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("Book updated successfully");
          form.reset();
          refetch();
        }
      })
      .catch((err) => {
        toast.error("Book added failed");
        console.log(err);
      });
  };
  return (
    <div className="pt-20">
      <Heading title={"Update Book"} span={"Update"} headings={"Book"} />
      <form onSubmit={submitData} className="font-Cabin ">
        <div className="flex gap-8">
          <div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Book Name
              </label>
              <input
                defaultValue={bookName}
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
                defaultValue={authorName}
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
                defaultValue={quantity}
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
                defaultValue={description}
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
                defaultValue={rating}
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
                defaultValue={category}
                className="border border-solid border-primaryColor w-1/2 px-5 py-2 rounded-lg"
              >
                {categorys.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[280px] md:w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Book Photo url
              </label>
              <br />
              <input
                defaultValue={bookPhoto}
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
            update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
