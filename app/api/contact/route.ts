import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, sessionType, dateLocation, message } = body;

    if (!name || !email || !mobile || !sessionType || !dateLocation) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();

    const newContact = await Contact.create({
      name,
      email,
      mobile,
      sessionType,
      dateLocation,
      message,
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating contact:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
