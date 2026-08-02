import { SignJWT, jwtVerify, JWTPayload } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET!);

export interface SessionPayload extends JWTPayload {
  email: string;
}

export async function createSession(email: string) {
  return await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(
  token: string
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify<SessionPayload>(token, secret);

    if (!payload.email) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}