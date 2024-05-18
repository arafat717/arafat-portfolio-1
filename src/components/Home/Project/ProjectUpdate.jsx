import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "../../Redux/api/projectApi";
import Swal from "sweetalert2";
import Loading from "../../Ui/Loading";

const ProjectUpdate = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  console.log(projectId);
  const { data, isLoading, isError } = useGetProjectByIdQuery(projectId);
  console.log(data);
  const [updatedProject, { isLoading: isUpdating }] =
    useUpdateProjectMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (data) {
      reset(data.data); // Populate form with existing skill data
    }
  }, [data, reset]);
  console.log(data);

  const onSubmit = async (updatedData) => {
    try {
      await updatedProject({
        projectId: projectId,
        updatedProject: updatedData,
      });
      Swal.fire("Skill updated successfully");
      navigate("/dashboard/manage-project");
    } catch (error) {
      console.error("Error updating skill:", error);
      Swal.fire("Error updating skill");
    }
  };

  if (isLoading || isUpdating) return <Loading />;
  if (isError) return <div>Error fetching skill data</div>;
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Submission Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              {...register("imageUrl", {
                required: "Image URL is required",
              })}
              className="input-field"
              placeholder="Enter image URL"
            />
            {/* {errors.imageUrl && (
              <p className="text-red-500 text-xs italic">
                {errors.imageUrl.message}
              </p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="liveLink"
              className="block text-gray-700 font-bold mb-2"
            >
              Live Link
            </label>
            <input
              type="text"
              id="liveLink"
              name="liveLink"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("liveLink", {
                required: "Live URL is required",
              })}
              placeholder="Enter live URL"
            />
            {/* {errors.liveLink && (
              <p className="text-red-500 text-xs italic">
                {errors.liveLink.message}
              </p>
            )} */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="serverRepo"
              className="block text-gray-700 font-bold mb-2"
            >
              Server Repo Link
            </label>
            <input
              type="text"
              id="serverRepo"
              name="serverRepo"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("serverRepo", {
                required: "Server Repo URL is required",
              })}
              placeholder="Enter server URL"
            />
            {/* {errors.serverRepo && (
              <p className="text-red-500 text-xs italic">
                {errors.serverRepo.message}
              </p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="clientRepo"
              className="block text-gray-700 font-bold mb-2"
            >
              Client Repo Link
            </label>
            <input
              type="text"
              id="clientRepo"
              name="clientRepo"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("clientRepo", {
                required: "Server Repo URL is required",
              })}
              placeholder="Enter client URL"
            />
            {/* {errors.clientRepo && (
              <p className="text-red-500 text-xs italic">
                {errors.clientRepo.message}
              </p>
            )} */}
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="technology"
              className="block text-gray-700 font-bold mb-2"
            >
              Technology
            </label>
            <input
              type="text"
              id="technology"
              name="technology"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("technology", {
                required: "Technology is required",
              })}
              placeholder="Enter technology"
            />
            {/* {errors.technology && (
              <p className="text-red-500 text-xs italic">
                {errors.technology.message}
              </p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="details"
              className="block text-gray-700 font-bold mb-2"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("details", {
                required: "Details are required",
              })}
              placeholder="Enter details"
            />
            {/* {errors.details && (
              <p className="text-red-500 text-xs italic">
                {errors.details.message}
              </p>
            )} */}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectUpdate;
