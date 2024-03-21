import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
  const prisma = new PrismaClient()
  const result = await prisma.users.createMany({
    data: [
      {
        fName: "Rashed",
        lName: "akash",
        age: 28,
      },
      {
        fName: "usman",
        lName: "akash",
        age: 28,
      },
      {
        fName: "umar",
        lName: "akash",
        age: 28,
      },
    ],
  });

  return NextResponse.json(result)
}