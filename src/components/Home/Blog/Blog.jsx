import { useGetBlogQuery } from "../../Redux/api/blogApi";
import BlogCard from "../../Ui/BlogCard";

const Blog = () => {
  const { data } = useGetBlogQuery({});

  return (
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Blogs
        </p>
        <p className="py-6">Read out some of my blogs here</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {data?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
