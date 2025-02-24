import { db } from "../../../config/db";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { user } = await req.json();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ message: "Payment successful" });

  } catch (error) {
    console.error("Error updating credits:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
