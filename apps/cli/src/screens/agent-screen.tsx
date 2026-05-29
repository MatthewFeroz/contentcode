import type { KeyBinding, TextareaRenderable } from "@opentui/core";
import { useRef, useState } from "react";
import { client } from "../lib/client";

const promptKeyBindings: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "linefeed", action: "submit" },
  { name: "return", shift: true, action: "newline" },
  { name: "linefeed", shift: true, action: "newline" },
];

export function AgentScreen() {
  const textAreaRef = useRef<TextareaRenderable>(null);
  const [reply, setReply] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    const message = textAreaRef.current?.plainText.trim() ?? "";
    textAreaRef.current?.clear();
    if (!message) return;

    setReply(null);
    setError(null);
    setPending(true);

    client.agent.chat
      .$post({ json: { message } })
      .then((res) => res.json())
      .then((data) => setReply(data.reply))
      .catch((e) => setError(String(e)))
      .finally(() => setPending(false));
  }

  return (
    <box
      width="100%"
      height="100%"
      backgroundColor="#000000"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
      paddingX={2}
    >
      <text fg="#F85000">Creator Code Agent</text>
      {pending && <text fg="#8A2D00">Thinking…</text>}
      {error && <text fg="#8A2D00">Error: {error}</text>}
      {reply && <text fg="#8A2D00">{reply}</text>}
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
          placeholder="Message the agent..."
          placeholderColor="#8A2D00"
          keyBindings={promptKeyBindings}
          onSubmit={handleSubmit}
        />
      </box>
    </box>
  );
}
