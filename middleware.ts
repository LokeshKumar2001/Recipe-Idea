import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const publicPaths = ["/login", "/register", "/api/auth"];
  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  const token = req.cookies.get("token")?.value;

  if (isPublic) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const dbToken = await prisma.token.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!dbToken || !dbToken.user) {
      throw new Error("Invalid or expired token");
    }

    if (pathname.startsWith("/api/admin") && dbToken.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Middleware auth error:", err);
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}
