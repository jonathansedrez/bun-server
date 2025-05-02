import { inMemoryDb } from "../db";

inMemoryDb.run(`CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  isCompleted BOOLEAN DEFAULT false
)`);

export const todoRoutes = {
  GET: async () => {
    const todos = inMemoryDb.query("SELECT * FROM todos").all();

    return Response.json(todos);
  },
  POST: async (req) => {
    const body = await req.json();

    if (!body.title) {
      return new Response("Missing 'content'", { status: 400 });
    }

    inMemoryDb.run("INSERT INTO todos (title, isCompleted) VALUES (?, ?)", [
      body.title,
      false,
    ]);

    return new Response("Message saved", { status: 201 });
  },
};
