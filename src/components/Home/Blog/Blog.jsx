import { motion } from "framer-motion";
import { useGetBlogQuery } from "../../Redux/api/blogApi";
import BlogCard from "../../Ui/BlogCard";
import Loading from "../../Ui/Loading";

const Blog = () => {
  const { data, isLoading, isError } = useGetBlogQuery({});

  if (isLoading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  if (isError) return <div>Error fetching blog</div>;
  if (!data) return <div>No blog found</div>;

  return (
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-14">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Blogs
        </p>
        <p className="py-6">Read some of my blogs here</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
