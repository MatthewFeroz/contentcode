import type { KeyBinding, TextareaRenderable } from "@opentui/core";
import { useRef } from "react";
import { useNavigate } from "react-router";

const promptKeyBindings: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "linefeed", action: "submit" },
  { name: "return", shift: true, action: "newline" },
  { name: "linefeed", shift: true, action: "newline" },
];

export function HomePrompt() {
  const navigate = useNavigate();
  const textAreaRef = useRef<TextareaRenderable>(null);

  function handleSubmit() {
    const command = textAreaRef.current?.plainText.trim().toLowerCase() ?? "";

    textAreaRef.current?.clear();

    if (command === "about" || command === "/about") {
      navigate("/about");
      return;
    }

    if (command === "settings" || command === "/settings") {
      navigate("/settings");
      return;
    }

    if (command === "health" || command === "/health") {
      navigate("/health");
      return;
    }

    if (command === "agent" || command === "/agent") {
      navigate("/agent");
      return;
    }

    navigate(`/not-found?command=${encodeURIComponent(command)}`);
  }

  return (
    <box
      width="80%"
      maxWidth={64}
      height={5}
      border
      borderStyle="rounded"
      borderColor="#F85000"
      paddingX={1}
      paddingY={0}
    >
      <textarea
        ref={textAreaRef}
        focused
        width="100%"
        height="100%"
        backgroundColor="#000000"
        focusedBackgroundColor="#000000"
        textColor="#F85000"
        focusedTextColor="#F85000"
        placeholder="Ask Creator Code to build, edit, or explain..."
        placeholderColor="#8A2D00"
        keyBindings={promptKeyBindings}
        onSubmit={handleSubmit}
      />
    </box>
  );
}
