"use client";
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function BlogList() {
  const [blogsData, setBlogsData] = useState([]);

  const fetchBlogsData = async () => {
    const response = await axios.get("/api/blog");
    setBlogsData(response.data.blogs);
  };

  const deleteBlog = async (_id) => {
    try {
      const response = await axios.delete("/api/blog", { params: { id: _id } });
      toast.success(response.data.message);
      fetchBlogsData();
    } catch (error) {
      toast.error("Error deleting blog");
    }
    fetchBlogsData();
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return (
    <div className="flex flex-col pt-5 px-5 sm:pt-12 sm:-l-16">
      <h1 className="text-2xl font-bold">All blogs</h1>
      <div className="relative h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text text-gray-100 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3 text-left">
                Author name
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogsData
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((blog) => {
                return <BlogTableItem key={blog._id} {...blog} deleteBlog={deleteBlog} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList;
