import { projectName } from "@contentcode/shared";
import { Hono } from "hono";
import { runAgent } from "./agent";

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
  })
  .post("/agent/chat", async (c) => {
    const { message } = await c.req.json<{ message: string }>();
    try {
      const reply = await runAgent(message);
      return c.json({ reply });
    } catch (e) {
      return c.json({ reply: `Agent error: ${String(e)}` });
    }
  });

export type AppType = typeof app;
