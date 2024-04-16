import { NextResponse } from "next/server";
import { verifyToken } from "./utils/jwtUtils";

export const middleware = async (req, res) => {
  try {
    const token = req.cookies.get("token");
    const payload = await verifyToken(token.value);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload.email);
    requestHeaders.set("id", payload.id);

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (error) {
    // Handle error here, for example, if token verification fails
    console.error("Error in middleware:", error);
    return NextResponse.error(new Error("Unauthorized"));
  }
};
