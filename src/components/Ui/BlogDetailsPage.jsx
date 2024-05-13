import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../Redux/api/blogApi";
import { motion } from "framer-motion";
import Loading from "./Loading";

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const { data: blog, isLoading, isError } = useGetBlogByIdQuery(blogId);

  if (isLoading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  if (isError) return <div>Error fetching blog</div>;
  if (!blog) return <div>No blog found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center mb-4">
            {blog.data.imageUrl && (
              <img
                src={blog.data.imageUrl}
                alt={blog.data.title}
                className="w-full h-60 rounded-lg"
              />
            )}
          </div>
          <div className="">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              {blog.data.title}
            </motion.h2>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 text-sm">{blog.data.author}</span>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          {blog.data.content}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BlogDetailsPage;
