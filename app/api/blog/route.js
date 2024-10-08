import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/models/db";
import BlogModel from "@/lib/config/BlogModel";
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ message: "Blog - GET" });
  try {
    await ConnectDB();
    const blogs = await BlogModel.find();
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImage: `${formData.get("authorImage")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, message: "Blog Added" });
}