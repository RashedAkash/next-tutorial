import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const prisma = new PrismaClient();
  const reqBody = await req.json();
  const result = await prisma.subscribers.create({
    data: reqBody,
  });
  return NextResponse.json({ status: true, data: result });
  // try {
    
  // } catch (error) {
  //   return NextResponse.json({ status: false, data: "not working" });
  // }
};
