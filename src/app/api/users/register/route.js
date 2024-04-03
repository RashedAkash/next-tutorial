import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
  const reqBody = await req.json();
  reqBody["otp"] = "0";
  const prisma = new PrismaClient();
  const result = await prisma.users.create({
    data: reqBody,
  });
  return NextResponse.json({ status: "true", data: result });
  // try {
     
  // } catch (error) {
  //   return NextResponse.json(error)
  // }
}