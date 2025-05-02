import { inMemoryDb } from "../db";

inMemoryDb.run(`CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  isCompleted BOOLEAN DEFAULT false
)`);

// Add a default value to GET request
inMemoryDb.run("INSERT INTO todos (title, isCompleted) VALUES (?, ?)", [
  "Learn Bun",
  false,
]);

export const todoRoutes = {
  GET: async () => {
    const todos = inMemoryDb.query("SELECT * FROM todos").all();

    return Response.json(todos);
  },
};
