import { projectName } from "@contentcode/shared";
import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: projectName,
    app: "server",
    status: "ok",
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "healthy",
  });
});

export type App = typeof app;
