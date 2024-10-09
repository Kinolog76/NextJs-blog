"use client";

import { useState, useEffect } from "react";
import { assets } from "@/assets/assets.js";
import HeaderTop from "@/Components/HeaderTop";
import Image from "next/image";
import Footer from "@/Components/Footer";
import axios from "axios";

function Page({ params }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get('/api/blog/', {
      params: {
        id: params.id
      }
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <>
      <div className="py-5 px-5 md:px-12 lg:px-28 bg-gray-200">
        <HeaderTop />
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
          <Image className="mx-auto mt-6 border border-white rounded-full" src={data.authorImg} alt={data.author} width={60} height={60} />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image className="border-4 border-white" src={data.image} alt={data.title} width={1280} height={720} priority={true} />
        <h2 className="text-[26px] font-semibold my-8">Introduction:</h2>
        <p>{data.description}</p>
        <h3 className="text-[18px] font-semibold my-5">Step 1: consectetur adipisicing elit.</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h3 className="text-[18px] font-semibold my-5">Step 2: consectetur adipisicing elit.</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h3 className="text-[18px] font-semibold my-5">Step 3: consectetur adipisicing elit.</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h3 className="text-[18px] font-semibold my-5">Conclusion:</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <div className="my-24">
          <p className="font font-semibold my-4 text-black">Share this article:</p>
          <div className="flex items-center gap-4 mt-2">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="twitter" width={50} />
            <Image src={assets.googleplus_icon} alt="googleplus" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default Page;
