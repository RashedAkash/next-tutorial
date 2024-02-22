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
  return NextResponse.json();
};

// put
export const PUT = async (req, res) => {
  return NextResponse.json();
};

// delete
export const DELETE = async (req, res) => {
  return NextResponse.json();
};