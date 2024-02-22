import { headers } from "next/headers";
import { NextResponse } from "next/server"
//get
export const GET = async (req,res) => {

  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
   return NextResponse.json({name:name});
}

//post
export const POST = async (req, res) => {
  const data = await req.json();
  return NextResponse.json({data:data});
}
// patch
export const PATCH = async (req, res) => {
  const header = headers();
  const api = header.get('api')
  return NextResponse.json({api:api});
};

// put
export const PUT = async (req, res) => {
  const cookies = req.cookies.get('token')
  return NextResponse.json({cookies:cookies});
};

// delete
export const DELETE = async (req, res) => {
  return NextResponse.json();
};