export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = await req.json();
    const username = body.username || "Guest";
    return new Response(
      JSON.stringify({ message: `Welcome ${username}! You’re registered.` }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response("Method not allowed", { status: 405 });
}
