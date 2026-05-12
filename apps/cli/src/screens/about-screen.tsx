export function AboutScreen() {
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
      <text fg="#F85000">Creator Code</text>
      <text fg="#8A2D00">A terminal workspace for creator-focused agents.</text>
      <text fg="#8A2D00">Type settings or return home to keep moving.</text>
    </box>
  );
}
