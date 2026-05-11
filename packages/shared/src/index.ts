export const projectName = "ContentCode";

export function getWelcomeMessage(surface: "cli" | "server") {
  return `Welcome to ${projectName} ${surface}`;
}
