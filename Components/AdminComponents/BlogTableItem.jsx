import { assets } from "@/assets/assets"
import Image from "next/image"

function BlogTableItem ({authorImg, author, title, date, deleteBlog, _id}) {
    
  const formatDate = (date) => {
    const newDate = new Date(date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return newDate.toLocaleDateString('en-US', options)
  }
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="items-center px-6 py-4 gap-3 sm:flex font-medium text-gray-900 whitespace-nowrap">
        <Image src={authorImg?authorImg:assets.profile_icon} alt="" width={40} height={40}/>
        <p>{author?author:"No author"}</p>
      </th>
      <td className="px-6 py-4">
        {title?title:"No title"}
      </td>
      <td className="px-6 py-4 text-center">
        {date?formatDate(date):"No date"}
      </td>
      <td onClick={() => deleteBlog(_id)} className="px-6 py-4 text-center cursor-pointer font-extrabold text-red-500">
        X
      </td>
    </tr>
  )
};

export default BlogTableItem
