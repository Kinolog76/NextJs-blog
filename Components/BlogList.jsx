import BlogItem from "./BlogItem";
import { blog_data } from "@/assets/assets";

function BlogList() {
  return (
    <div>
      <div className="flex gap-6 my-10 justify-center">
        <button className="bg-black text-white px-4 py-2 rounded-sm">
          All
        </button>
        <button className="border border-transparent hover:border-black px-4 py-2 transition-all duration-300">
          Technology
        </button>
        <button className="border border-transparent hover:border-black px-4 py-2 transition-all duration-300">
          Startup
        </button>
        <button className="border border-transparent hover:border-black px-4 py-2 transition-all duration-300">
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((item) => {
          return <BlogItem key={item.id} {...item} />
        })}
      </div>
    </div>
  );
}

export default BlogList;
