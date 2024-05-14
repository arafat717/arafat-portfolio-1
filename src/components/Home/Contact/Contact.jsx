import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const formControls = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    emailjs
      .send("service_fs8pvqe", "template_2dt09ue", data, {
        publicKey: "b7RwsZg4VxR_HazEv",
      })
      .then(
        () => {
          Swal.fire("Message send successfully");
        },
        (error) => {
          Swal.fire("FAILED...", error.text);
        }
      );
    reset();
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div name="contact">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="w-full bg-gradient-to-b p-4"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <motion.p
              className="text-4xl font-bold inline border-b-4 border-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contact
            </motion.p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className={`flex justify-center items-center`}>
            <form
              ref={formControls}
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                {...register("user_name", { required: "Name is required" })}
              />
              {errors.user_name && (
                <div className="text-red-600">{errors.user_name.message}</div>
              )}
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                {...register("user_email", { required: "Email is required" })}
              />
              {errors.user_email && (
                <div className="text-red-600">{errors.user_email.message}</div>
              )}
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <div className="text-red-600">{errors.message.message}</div>
              )}
              <motion.input
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
