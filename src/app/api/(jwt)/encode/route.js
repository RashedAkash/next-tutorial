import { SignJWT } from "jose"
import { NextResponse } from "next/server"

export const GET = async (req,res) => {
  const secret = new TextEncoder().encode(process.env.JWT_KEY);
  const user = { email: "Rashed@gmail.com" }
  const token = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("http://localhost:3000/")
    .setExpirationTime('2h')
    .sign(secret)
  return NextResponse.json(token)
}