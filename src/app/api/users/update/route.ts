import { getErrorResponse } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const userId = req.headers.get("X-USER-ID");

  if (!userId) {
    return getErrorResponse(
      401,
      "You are not logged in, please provide token to gain access"
    );
  }

  let userData;

  try {
    userData = await req.json();
  } catch (error) {
    console.error("Error parsing request body:", error);
    return getErrorResponse(400, "Invalid request body");
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: userData,
    });

    return NextResponse.json({
      status: "success",
      data: { user: { ...updatedUser, password: undefined } },
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return getErrorResponse(500, "Internal server error");
  }
}
