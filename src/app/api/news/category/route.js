import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const catID = parseInt(searchParams.get("catID"));
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { catID: catID },
    });
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: "not working" });
  }
};
