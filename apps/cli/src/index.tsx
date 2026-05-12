#!/usr/bin/env bun

import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

const stdin = process.stdin;
const wasRaw = stdin.isRaw ?? false;

if (stdin.isTTY && stdin.setRawMode) {
  stdin.setRawMode(true);
}

try {
  const renderer = await createCliRenderer({
    exitOnCtrlC: true,
    stdin,
  });

  createRoot(renderer).render(<RouterProvider router={router} />);
} catch (error) {
  if (stdin.isTTY && stdin.setRawMode) {
    stdin.setRawMode(wasRaw);
  }

  throw error;
}
