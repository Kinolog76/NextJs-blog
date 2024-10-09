import { SignJWT } from "jose";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    const response = new Response(JSON.stringify({ message: "Logged in successfully" }), {
      status: 200,
      headers: {
        "Set-Cookie": `authToken=${token}; Path=/; HttpOnly`,
      },
    });

    return response;
  }

  return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
}
