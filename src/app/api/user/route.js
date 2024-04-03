import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
  const prisma = new PrismaClient()
  const result = await prisma.users.findUnique({
    where: { id: 10 },
   
    
   })
  

  return NextResponse.json(result)
}

//get

const GET = async (req, res) => {
  const prisma = new PrismaClient()
  const result = await prisma.users.findMany()
  return NextResponse.json(result)
}