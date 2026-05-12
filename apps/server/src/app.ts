import { projectName } from "@contentcode/shared";
import { Hono } from "hono";

export const app = new Hono()
  .get("/", (c) => {
    return c.json({
      name: projectName,
      app: "server",
      status: "ok",
    });
  })
  .get("/health", (c) => {
    return c.json({
      status: "healthy",
    });
  });

export type AppType = typeof app;
