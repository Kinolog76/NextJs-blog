"use client"
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem"
import { useState, useEffect } from "react";
import axios from "axios";

function BlogList () {
  const [blogsData, setBlogsData] = useState([])

  const fetchBlogsData = async () => {
    const response = await axios.get("/api/blog")
    console.log(response.data);
    setBlogsData(response.data.blogs)
  }

  useEffect(() => {
    fetchBlogsData()
  }, [])

  return (
    <div className="flex flex-col pt-5 px-5 sm:pt-12 sm:-l-16">
        <h1>All blogs</h1>
        <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text text-gray-100 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">Author name</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogsData
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((blog) => {
                  return <BlogTableItem key={blog._id} {...blog}/>
                })}
            </tbody>
          </table>
        </div>
    </div>
  )
};

export default BlogList
