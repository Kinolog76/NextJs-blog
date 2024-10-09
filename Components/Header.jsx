import HeaderTop from "@/Components/HeaderTop";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Header() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid Email address");
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await axios.post("/api/email", formData);
      toast.success(response.data.message);
      setEmail("");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <header className="py-5 px-5 md:px-12 lg:px-28">
      <HeaderTop />
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p className="mt-10 max-w-[750px] mx-auto text-sx sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vitae ipsa. Iste
          obcaecati corrupti natus facere quae consequuntur qui.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-solid border-black p-1 shadow-[-2px_2px_0px_#000] focus-within:shadow-[-7px_7px_0px_#000] transition-all duration-300"
          action="">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none w-full"
          />
          <button
            type="submit"
            className="bg-black border border-solid border-black text-white py-2 px-4 hover:bg-gray-300 hover:text-black focus:bg-gray-300 focus:text-black transition-all duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
