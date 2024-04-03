import { createJwt } from "@/utils/jwtUtils";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  const result = await prisma.users.findUnique({
    where: reqBody,
  });

  if (result===1) {
    // Check if result exists and is not null
    const token = await createJwt(result["email"], result["id"]);
    const expireTime = new Date(Date.now() + 240000000);
    const cookie = `token=${token}; expires=${expireTime.toUTCString()}; path=/`;

    return NextResponse.json({ result }, { headers: { "Set-Cookie": cookie } })
  } else {
    // Handle case where user is not found
    return NextResponse.json({ error: "User not found" });
  }
};
