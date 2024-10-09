"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "@/Components/Footer";
import HeaderTop from "@/Components/HeaderTop";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        toast.success("Logged in successfully");
        router.push("/admin");
      } else {
        toast.error("Invalid login or password");
      }
    } catch (error) {
      toast.error("Invalid login or password");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div className="py-5 px-5 md:px-12 lg:px-28 bg-gray-200">
        <HeaderTop />
      </div>
      <div className="flex justify-center items-center h-full flex-grow">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 px-8 pt-6 pb-8 mb-4 max-w-[400px] w-full shadow-[-5px_5px_0px_#000]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
