import { useLocation } from "react-router";

export function NotFoundScreen() {
  const { search } = useLocation();
  const command = new URLSearchParams(search).get("command");

  return (
    <box
      width="100%"
      height="100%"
      backgroundColor="#000000"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <text fg="#F85000">Route not found</text>
      <text fg="#8A2D00">
        {command ? `No screen matches "${command}".` : "Return to / to open Creator Code."}
      </text>
    </box>
  );
}
