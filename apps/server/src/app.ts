import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: "contentcode-server",
    status: "ok",
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "healthy",
  });
});

export type App = typeof app;
