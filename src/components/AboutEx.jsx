import { Link } from "react-router-dom";

const AboutEx = () => {
  return (
    <section className="py-16 my-14">
      <div className="max-w-4xl mx-auto px-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">My Approach</h3>
          <p className="text-lg mb-6">
            I believe in a user-centric approach to web development, focusing on
            creating intuitive and engaging experiences for users. My goal is to
            not just meet client requirements but exceed them, delivering
            high-quality solutions that drive results.
          </p>
          <p className="text-lg mb-6">
            I value collaboration and communication, working closely with
            clients and team members to understand their needs and goals. By
            maintaining transparency and open dialogue throughout the
            development process, I ensure that the final product meets
            expectations and delivers value.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-full inline-block hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutEx;
