/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { imageUrl, content, title, author } = blog;
  return (
    <div className="max-w-md mx-auto border border-red-200 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className=" items-center w-full h-full object-cover md:w-48"
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
          <a className="mt-4 cursor-pointer block text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
