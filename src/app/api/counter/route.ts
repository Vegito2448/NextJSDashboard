import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {

  console.log({
    method: request.method,
  });



  return NextResponse.json({
    method: request.method,
    count: 34
  });
}
export async function POST(request: Request) {

  console.log({
    method: request.method,
  });



  return NextResponse.json({
    method: request.method,
    count: 34
  });
}