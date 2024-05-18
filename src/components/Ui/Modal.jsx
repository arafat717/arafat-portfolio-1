import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  // const [createSkill] = useUpdateSkillMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   const id = selectedItem._id;
    //   const skill = await createSkill(data, id);
    //   console.log(skill);
    //   // You can handle form submission here
    //   reset();
    //   closeModal();
    //   Swal.fire("Skill updated successfully");
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(data);
    reset();
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-10"></div>
            <div className="relative bg-white rounded-lg w-1/2 sm:w-1/3">
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
                </form>
                <div className="modal-action">
                  <button className="btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
