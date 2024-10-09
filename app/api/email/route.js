import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/EmailModel";
import { ConnectDB } from "@/lib/config/db";
const fs = require("fs");

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

// POST
export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  }

  await EmailModel.create(emailData);

  return NextResponse.json({ success: true, message: "Email Subscribed" });
}

// GET
export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ success: true, emails });
}

// DELETE
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "Email Deleted" });
}

