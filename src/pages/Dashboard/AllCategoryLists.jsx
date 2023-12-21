import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

import Loading from "../../components/shared/Loading";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AllCategoryLists = ({ data, isLoading, refetch }) => {
  const axios = useAxios();
  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = async (id) => {
    console.log(id);
    axios
      .delete(`/admin/delete-category/${id}`)
      .then((result) => {
        console.log(result);
        if (result.data?.success) {
          toast.success("Category deleted successfully");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = async (id) => {
    console.log(id);
  };
  return (
    <section className=" font-poppins sdfbg-gray-800 ">
      <div className="justify-center px-4 py-4 mx-auto lg:py-8 md:px-6 w-[200px] lg:w-[800px]">
        <div className="pt-4 rounded shadow bg-stone-100 sdfbg-gray-900">
          <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b sdfborder-gray-700">
            <h2 className="mb-4 text-xl font-bold md:mb-0 sdftext-gray-400">
              List of Category
            </h2>
            <div className="flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 sdfborder-gray-400">
              <input
                type="text"
                className="w-full pr-4 text-sm text-gray-700 bg-stone-100 sdftext-gray-400 sdfbg-gray-900 placeholder-text-100 "
                placeholder="search..."
              />
              <button className="flex items-center text-gray-700 sdftext-gray-400 sdfhover:text-blue-300 hover:text-blue-600">
                <span className="mr-2 text-xs ">Go</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-sm text-left text-gray-500 sdftext-gray-400">
                  <th className="flex items-center px-6 pb-3 font-medium sdftext-gray-400">
                    <input className="mr-4" type="checkbox" name="" id="" />
                    <span>Name</span>
                  </th>
                  <th className="px-6 pb-3 font-medium ">Category Image </th>
                  <th className="px-6 pb-3 font-medium"> Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr
                    key={item._id}
                    className="text-sm bg-white sdftext-gray-400 sdfbg-gray-800"
                  >
                    <td className="flex items-center px-6 py-5 font-medium">
                      <input className="mr-4" type="checkbox" name="" id="" />
                      <p className="">{item.name}</p>
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <img
                        src={`https://library-room-server.vercel.app${item.CategoryPhoto}`}
                        alt="category img"
                        className="w-12 h-12 border border-solid border-primaryColor"
                      />
                    </td>

                    <td className="flex items-center gap-4 px-6 py-5 ">
                      <AiFillDelete
                        className="text-2xl text-red-600 cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      />
                      <AiFillEdit
                        className="text-2xl text-primaryColor cursor-pointer"
                        onClick={() => handleEdit(item._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end pt-4 mt-4 border-t sdfborder-gray-700">
              <nav aria-label="page-navigation">
                <ul className="flex list-style-none">
                  <li className="page-item disabled ">
                    <a
                      href="#"
                      className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md sdftext-gray-400 hover:text-gray-100 hover:bg-blue-600"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 sdfhover:text-gray-400 sdfhover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md "
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoryLists;
