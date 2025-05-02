import { routes } from "./routes";

Bun.serve({
  routes,
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});
