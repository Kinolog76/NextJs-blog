import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 py-3 h-[63px] border border-black flex items-center justify-center">
        <Image src={assets.logo} alt="Blog-Admin logo" width={100} height={100} />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href="/admin/addProduct" className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.add_icon} alt="Add" width={28} />
            <p>Add Blog</p>
          </Link>
          <Link href="/admin/blogList" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.blog_icon} alt="Add" width={28} />
            <p>Blog list</p>
          </Link>
          <Link href="/admin/subscriptions" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.email_icon} alt="Add" width={28} />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
