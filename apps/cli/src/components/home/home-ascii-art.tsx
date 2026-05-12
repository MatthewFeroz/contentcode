export function HomeAsciiArt() {
  return (
    <box
      width="100%"
      zIndex={0}
      opacity={0.35}
      alignItems="center"
    >
      <ascii-font
        text="CREATOR CODE"
        font="tiny"
        color="#F85000"
        selectable={false}
      />
    </box>
  );
}
