import { createToken } from "@/utils/jwtUtils";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  const result = await prisma.users.findUnique({
    where: {
      email: reqBody.email, // Assuming email is the unique identifier
    },
  });
  if (!result) {
    return NextResponse.json({ status: false, data: "false" });
  } else {
    const token = await createToken(result.email, result.id);
    const expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const cookies = `token=${token};expire=${expireDuration.toUTCString()};path=/`;
    return NextResponse.json(
      { status: true, data: token },
      { headers: { "set-cookie": cookies } }
    );
  }
};
