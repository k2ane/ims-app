import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const query = request.nextUrl.searchParams;
    const data = query.get('uid');
    return Response.json({data: data, status: "ok"});
}