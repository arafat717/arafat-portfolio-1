import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { imageUrl, content, title, author, _id } = blog;
  return (
    <motion.div
      className="max-w-md mx-auto border border-red-200 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="items-center w-full h-full object-cover md:w-48"
            src={imageUrl}
            alt="Blog Cover"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {author}
          </div>
          <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </a>
          <p className="mt-2 text-gray-500">{content.slice(0, 130)}...</p>
          <Link
            to={`/blog/${_id}`}
            className="mt-4 cursor-pointer block text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Read
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
