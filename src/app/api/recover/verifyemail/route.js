import { sendMail } from "@/utils/nodemailer";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const prisma = new PrismaClient();
  const count = await prisma.users.count({
    where: { email: email },
  });
  if (count === 1) {
    const code = Math.floor(100000 + Math.random() * 900000);
    const emailSubject = "your otp code";
    const emailText = `your otp code is ${code}`;
    await sendMail(email, emailSubject, emailText);
    const result = await prisma.users.update({
      where: { email: email },
      data: {
        otp:code.toString()
      }
    })
    return NextResponse.json({ status: true, data: result });
  } else {
    return NextResponse.json({ status: false,data:'false' });
  }
};
