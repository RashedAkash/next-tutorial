import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import exp from "constants";
import { headers } from "next/headers";
const pump = promisify(pipeline);

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const file = formData.getAll("files")[0];
    const filePath = `./public/file/${file.name}`;
    await pump(file.stream(), fs.createWriteStream(filePath));
    return NextResponse.json({ status: "success", data: file.size });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}


export const GET = async (req, res) => {
  const cookies = await req.cookies.get("token");
  return NextResponse.json({msg:cookies})
}

export const PATCH = async (req, res) => {
  const header = await headers()
  const name = header.get('name')
   return NextResponse.json({ msg: name });
}