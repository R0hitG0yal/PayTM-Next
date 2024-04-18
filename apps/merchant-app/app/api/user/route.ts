import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { NextResponse } from "next/server";

export const Get = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    await NextResponse.json({
      user: session.user,
    });
  }
  return NextResponse.json(
    {
      message: "You aren't logged in.",
    },
    {
      status: 403,
    }
  );
};
