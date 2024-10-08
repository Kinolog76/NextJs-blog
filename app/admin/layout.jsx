import { assets } from "@/assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar.jsx";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 h-[64px] max-h-[600px] px-12 border-b-2 border-t border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
