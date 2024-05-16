import { useGetProjectQuery } from "../../Redux/api/projectApi";
import Loading from "../../Ui/Loading";
import { FaUpload } from "react-icons/fa";

const ProjectManage = () => {
  const { data, isLoading, isError } = useGetProjectQuery({});

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );

  if (isError)
    return <div className="text-red-600">Error fetching project</div>;

  // if (!data || !data.length)
  //   return <div className="text-gray-600">No projects found</div>;

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
              Live Link
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
                {product?.liveLink}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <FaUpload></FaUpload>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <FaUpload></FaUpload>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectManage;
