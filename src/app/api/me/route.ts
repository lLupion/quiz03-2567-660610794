import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Wichuda Rotna",
    studentId: "660610794",
  });
};
