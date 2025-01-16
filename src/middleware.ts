import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const redirect = (request: NextRequest) => {
  return NextResponse.rewrite(new URL("/", request.url));
};

export async function middleware(request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req: request, secret });
  if (!token) return redirect(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/home",
};
