import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddSkills = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here
    reset();
    Swal.fire("Skill added successfully");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
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
          {errors.imageUrl && (
            <p className="text-red-500 text-xs italic">
              {errors.imageUrl.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="skillName"
            className="block text-gray-700 font-bold mb-2"
          >
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            {...register("skillName", { required: "Skill Name is required" })}
            className="input-field"
            placeholder="Enter skill name"
          />
          {errors.skillName && (
            <p className="text-red-500 text-xs italic">
              {errors.skillName.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkills;
