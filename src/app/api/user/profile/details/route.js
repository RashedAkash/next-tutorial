import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const headerList = headers();
    const id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({
      where: { id: id },
    });
    if (result) {
      return NextResponse.json({ status: 200, data: result });
    } else {
      return NextResponse.json({ status: 404, data: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    return NextResponse.json({ status: 500, data: "Internal server error" });
  }
};
