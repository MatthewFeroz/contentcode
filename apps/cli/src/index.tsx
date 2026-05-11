#!/usr/bin/env bun

import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { getWelcomeMessage } from "@contentcode/shared";

function BackgroundAsciiArt() {
  return (
    <box
      position="absolute"
      top={1}
      left={2}
      zIndex={0}
      opacity={0.35}
    >
      <ascii-font
        text="OPENCODE"
        font="block"
        color="#1E293B"
        selectable={false}
      />
    </box>
  );
}

function WelcomeText() {
  return (
    <box
      position="absolute"
      top={8}
      left={6}
      zIndex={1}
      flexDirection="column"
      gap={1}
    >
      <text fg="#F8FAFC">{getWelcomeMessage("cli")}</text>
      <text fg="#94A3B8">Bun workspaces are ready.</text>
      <text fg="#64748B">Press Ctrl+C to exit.</text>
    </box>
  );
}

function App() {
  return (
    <box
      width="100%"
      height="100%"
      backgroundColor="#020617"
    >
      <BackgroundAsciiArt />
      <WelcomeText />
    </box>
  );
}

const renderer = await createCliRenderer({
  exitOnCtrlC: true,
});

createRoot(renderer).render(<App />);
