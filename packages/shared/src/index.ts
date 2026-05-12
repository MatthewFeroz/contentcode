export const projectName = "Creator Code";

export function getWelcomeMessage(surface: "cli" | "server") {
  return `Welcome to ${projectName} ${surface}`;
}
