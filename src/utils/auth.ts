import jwt from "jsonwebtoken";

export function getUserId(req: any): number | null {
  try {
    const auth = req.headers.authorization;
    if (!auth) return null;

    const token = auth.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return (payload as any).userId;
  } catch {
    return null;
  }
}
