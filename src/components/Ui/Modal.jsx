import { useForm } from "react-hook-form";

const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // try {
    //   const skilldata = {
    //     skill: data,
    //   };
    //   const skill = await createSkill(skilldata);
    //   console.log(skill);
    //   // You can handle form submission here
    //   reset();
    //   Swal.fire("Skill added successfully");
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(data);
    reset();
  };
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-full p-9 max-w-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Click the button below to close</p>
        <div className="modal-action">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("skillName", {
                  required: "Skill Name is required",
                })}
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
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
