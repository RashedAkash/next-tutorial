import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.categories.findMany();
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: "not working" });
  }
};
