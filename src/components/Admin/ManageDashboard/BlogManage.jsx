import { FaRegEdit } from "react-icons/fa";
import {
  useDeleteBlogMutation,
  useGetBlogQuery,
} from "../../Redux/api/blogApi";
import Loading from "../../Ui/Loading";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BlogManage = () => {
  const { data, isLoading, isError } = useGetBlogQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (skillId) => {
    try {
      await deleteBlog(skillId);
      Swal.fire("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  if (isLoading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  if (isError) return <div>Error fetching blog</div>;
  if (!data) return <div>No blog found</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.data?.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={product.imageUrl} alt="" className="w-28 " />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product?.title.slice(0, 50)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product?.author.slice(0, 50)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to={`blog/${product._id}`}>
                  <FaRegEdit className="cursor-pointer text-4xl text-white bg-blue-600 p-2 rounded-md"></FaRegEdit>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <AiOutlineDelete
                  onClick={() => handleDelete(product._id)}
                  className="cursor-pointer text-4xl text-white bg-red-600 p-2 rounded-md"
                ></AiOutlineDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManage;
