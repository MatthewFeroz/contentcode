#!/usr/bin/env bun

import { Box, Text, createCliRenderer } from "@opentui/core";

const renderer = await createCliRenderer({
  exitOnCtrlC: true,
});

renderer.root.add(
  Box(
    {
      borderStyle: "rounded",
      flexDirection: "column",
      gap: 1,
      padding: 1,
    },
    Text({
      content: "Welcome to ContentCode",
      fg: "#7DD3FC",
    }),
    Text({
      content: "Bun workspaces are ready.",
      fg: "#F8FAFC",
    }),
    Text({
      content: "Press Ctrl+C to exit.",
      fg: "#94A3B8",
    }),
  ),
);
