import { SignJWT, jwtVerify } from "jose";

export const createToken = async (email, id) => {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  const payload = { email: email, id: id };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("localhost")
    .setExpirationTime("24hr")
    .sign(secret);
  return token;
};
export const verifyToken = async (token) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    const decoded = await jwtVerify(token, secret);
    return decoded.payload;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};
