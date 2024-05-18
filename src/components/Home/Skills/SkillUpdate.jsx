import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSkillByIdQuery,
  useUpdateSkillMutation,
} from "../../Redux/api/skillApi";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Loading from "../../Ui/Loading";

const SkillUpdate = () => {
  const { skillId } = useParams();
  const { data, isLoading, isError } = useGetSkillByIdQuery(skillId);
  const navigate = useNavigate();

  const [updateSkill, { isLoading: isUpdating }] = useUpdateSkillMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (data) {
      reset(data.data); // Populate form with existing skill data
    }
  }, [data, reset]);
  console.log(data);

  const onSubmit = async (updatedData) => {
    try {
      await updateSkill({ skillId: skillId, updatedSkill: updatedData });
      reset();
      Swal.fire("Skill updated successfully");
      navigate("/dashboard/manage-skill");
    } catch (error) {
      console.error("Error updating skill:", error);
      Swal.fire("Error updating skill");
    }
  };

  if (isLoading || isUpdating) return <Loading />;
  if (isError) return <div>Error fetching skill data</div>;
  return (
    <div className="bg-white rounded-lg w-1/2 sm:w-1/3 mx-auto items-center">
      <div className="p-8">
        <h3 className="font-bold text-lg">Hello!</h3>
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
              {...register("imageUrl", {})}
              className="input-field"
              placeholder="Enter image URL"
            />
            {/* {errors.imageUrl && (
              <p className="text-red-500 text-xs italic">
                {errors.imageUrl.message}
              </p>
            )} */}
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
              {...register("skillName", {})}
              className="input-field"
              placeholder="Enter skill name"
            />
            {/* {errors.skillName && (
              <p className="text-red-500 text-xs italic">
                {errors.skillName.message}
              </p>
            )} */}
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
    </div>
  );
};

export default SkillUpdate;
