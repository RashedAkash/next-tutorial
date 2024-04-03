import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  const count = await prisma.users.count({
    where: reqBody ,
   
  });
  if (count === 1) {
    return NextResponse.json({ data: true });
  } else {
    return NextResponse.json({ data: count });
  }
};
