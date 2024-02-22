import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export const GET = async (req,res) => {
  const secret = new TextEncoder().encode(process.env.JWT_KEY)
  let token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IlJhc2hlZEBnbWFpbC5jb20iLCJpYXQiOjE3MDg2MDgwNjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJleHAiOjE3MDg2MTUyNjJ9.ED2Y-H4yak3NQTCYBd2r6m645c4m20tLzveHHwS38gU";
  const decode = await jwtVerify(token, secret)
  return NextResponse.json(decode)
}