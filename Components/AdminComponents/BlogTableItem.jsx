import { formatDate } from "@/helpers/FormatDate.helper";
import { assets } from "@/assets/assets";
import Image from "next/image";

function BlogTableItem({ authorImg, author, title, date, deleteBlog, _id }) {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center px-6 py-4 gap-3 sm:flex font-medium text-gray-900 whitespace-nowrap">
        <Image src={authorImg ? authorImg : assets.profile_icon} alt="" width={40} height={40} />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No title"}</td>
      <td className="px-6 py-4 text-center">{date ? formatDate(date) : "No date"}</td>
      <td
        onClick={() => deleteBlog(_id)}
        className="px-6 py-4 text-center cursor-pointer font-extrabold text-red-500">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-trash-2 mx-auto">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </td>
    </tr>
  );
}

export default BlogTableItem;
