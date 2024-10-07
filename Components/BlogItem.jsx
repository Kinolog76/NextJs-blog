import Image from "next/image";
import { blog_data, assets } from "@/assets/assets";

function BlogItem({ title, description, category, image }) {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] transition-all duration-300">
      <Image
        src={image}
        alt=""
        className="border-b border-black"
        width={400}
        height={400}
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h4 className="mb-2 text=lg font-medium tracking-tight text-gray-900">{title}</h4>
        <p className="mb-3 text-sm text-gray-700 tracking-tight">{description}</p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
          Read more <Image src={assets.arrow} className="ml-2 pt-0.5" alt="" width={12} />
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
