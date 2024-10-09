import BlogItem from "./BlogItem";
import axios from "axios";
import { useEffect, useState } from "react";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleMenu = (category) => {
    setMenu(category);
    console.log(category);
  };

  return (
    <div>
      <div className="flex gap-6 my-10 justify-center flex-wrap">
        <button
          onClick={() => handleMenu("All")}
          className={`${
            menu === "All"
              ? "bg-black text-white border"
              : "border border-transparent hover:border-black"
          } px-4 py-2 transition-all duration-300`}>
          All
        </button>
        <button
          onClick={() => handleMenu("Technology")}
          className={`${
            menu === "Technology"
              ? "bg-black text-white border"
              : "border border-transparent hover:border-black"
          } px-4 py-2 transition-all duration-300`}>
          Technology
        </button>
        <button
          onClick={() => handleMenu("Startup")}
          className={`${
            menu === "Startup"
              ? "bg-black text-white border"
              : "border border-transparent hover:border-black"
          } px-4 py-2 transition-all duration-300`}>
          Startup
        </button>
        <button
          onClick={() => handleMenu("Lifestyle")}
          className={`${
            menu === "Lifestyle"
              ? "bg-black text-white border"
              : "border border-transparent hover:border-black"
          } px-4 py-2 transition-all duration-300`}>
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-2 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .filter((item) => (menu === "All" ? item : item.category === menu))
          .map((item) => {
            return <BlogItem key={item._id} {...item} />;
          })}
      </div>
    </div>
  );
}

export default BlogList;
