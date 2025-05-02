export const htmlRoutes = {
  GET: async () => {
    const html = await Bun.file("public/default.html").text();

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
