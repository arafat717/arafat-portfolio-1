import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const formControls = useRef(null);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          formControls.current,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm();
            Swal.fire("Email sent successfully");
          },
          (error) => {
            console.log(error.text);
            Swal.fire("Error sending email", error.message, "error");
          }
        );
    },
  });

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
        className="w-full h-screen bg-gradient-to-b p-4"
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
              onSubmit={formik.handleSubmit}
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                {...formik.getFieldProps("user_name")}
              />
              {formik.touched.user_name && formik.errors.user_name && (
                <div className="text-red-600">{formik.errors.user_name}</div>
              )}
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                {...formik.getFieldProps("user_email")}
              />
              {formik.touched.user_email && formik.errors.user_email && (
                <div className="text-red-600">{formik.errors.user_email}</div>
              )}
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-600">{formik.errors.message}</div>
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
