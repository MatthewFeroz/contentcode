#!/usr/bin/env bun

import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { getWelcomeMessage } from "@contentcode/shared";

function App() {
  return (
    <box
      borderStyle="rounded"
      flexDirection="column"
      gap={1}
      padding={1}
    >
      <text fg="#7DD3FC">{getWelcomeMessage("cli")}</text>
      <text fg="#F8FAFC">Bun workspaces are ready.</text>
      <text fg="#94A3B8">Press Ctrl+C to exit.</text>
    </box>
  );
}

const renderer = await createCliRenderer({
  exitOnCtrlC: true,
});

createRoot(renderer).render(<App />);
