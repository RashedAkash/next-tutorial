import { SignJWT, jwtVerify } from "jose"

export const createJwt = async (email,id) => {
  const secret = new TextEncoder().encode("123-abc-xyz")
  const payload = { email: email, id: id }
  const encodeToken = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer('localhost')
    .setExpirationTime('24hr')
    .sign(secret);
  return encodeToken;
}

export const decodeJwt = async (token) => {
  const secret = new TextEncoder().encode("123-abc-xyz");
  const decode = await new jwtVerify(token, secret)
  return decode;
}