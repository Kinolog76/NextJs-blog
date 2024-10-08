"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Vladislav P",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Vladislav P",
          authorImg: "/author_img.png",
        });
      }
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer relative z-10"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={78}
            alt=""
          />
        </label>
        <input
          className="relative ml-16 max-w-1 max-h-1 bottom-1"
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          onChange={onChangeHandler}
          value={data.title}
          name="title"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Title"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border resize-y"
          type="text"
          placeholder="Description"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog Caregory</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="w-40 mt-4 px-4 py-4 border text-gray-500">
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 bg-black h-12 text-white">
          ADD
        </button>
      </form>
    </>
  );
}

export default Page;
