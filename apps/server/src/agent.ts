import { ChatAnthropic } from "@langchain/anthropic";
import { tool } from "@langchain/core/tools";
import { createAgent } from "langchain";
import { z } from "zod";

// A trivial creator-domain tool, just enough to prove the agent can call
// tools. Real video/agent tooling replaces this later.
const wordCount = tool(
  async ({ text }) => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `The text contains ${words} word${words === 1 ? "" : "s"}.`;
  },
  {
    name: "word_count",
    description:
      "Count the number of words in a piece of text. Use when the user asks how long a script, caption, or description is.",
    schema: z.object({
      text: z.string().describe("The text whose words should be counted"),
    }),
  },
);

// Built lazily so importing this module (and starting the server) never
// requires an API key — only an actual /agent/chat call does.
let agent: ReturnType<typeof createAgent> | undefined;

function getAgent() {
  if (agent) return agent;

  const apiKey = Bun.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set; the agent cannot run without it.",
    );
  }

  const model = new ChatAnthropic({
    model: Bun.env.AGENT_MODEL ?? "claude-sonnet-4-5",
    apiKey,
  });

  agent = createAgent({
    model,
    tools: [wordCount],
    systemPrompt:
      "You are Creator Code, a terminal assistant for content creators. Be concise.",
  });

  return agent;
}

export async function runAgent(message: string): Promise<string> {
  const result = await getAgent().invoke({
    messages: [{ role: "user", content: message }],
  });
  const last = result.messages[result.messages.length - 1];
  const content = last?.content;
  return typeof content === "string" ? content : JSON.stringify(content);
}
