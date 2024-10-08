export async function GET() {
    const data = {data: {msg: "signIn", status: 200}};
    return Response.json(data);
}