import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../Redux/api/blogApi";
import { useEffect } from "react";
import Loading from "../../Ui/Loading";
import Swal from "sweetalert2";

const BlogUpdate = () => {
  const { blogId } = useParams();
  const { data, isLoading, isError } = useGetBlogByIdQuery(blogId);
  const navigate = useNavigate();

  const [updatedBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (data) {
      reset(data.data); // Populate form with existing skill data
    }
  }, [data, reset]);
  console.log(data);

  const onSubmit = async (updatedData) => {
    try {
      await updatedBlog({ blogId: blogId, updatedBlog: updatedData });
      reset();
      Swal.fire("Skill updated successfully");
      navigate("/dashboard/manage-blog");
    } catch (error) {
      console.error("Error updating skill:", error);
      Swal.fire("Error updating skill");
    }
  };

  if (isLoading || isUpdating) return <Loading />;
  if (isError) return <div>Error fetching skill data</div>;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              {...register("title", { required: "Title is required" })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter title"
            />
            {/* {errors.title && (
              <p className="text-red-500 text-xs italic">
                {errors.title.message}
              </p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-bold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              {...register("author", { required: "Author is required" })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter author"
            />
            {/* {errors.author && (
              <p className="text-red-500 text-xs italic">
                {errors.author.message}
              </p>
            )} */}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            {...register("content", { required: "Content is required" })}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="5"
            placeholder="Enter content"
          />
          {/* {errors.content && (
            <p className="text-red-500 text-xs italic">
              {errors.content.message}
            </p>
          )} */}
        </div>
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

export default BlogUpdate;
