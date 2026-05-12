import { HomeAsciiArt } from "../components/home/home-ascii-art";
import { HomePrompt } from "../components/home/home-prompt";

export function HomeScreen() {
  return (
    <box
      width="100%"
      height="100%"
      backgroundColor="#000000"
      flexDirection="column"
      alignItems="center"
      paddingTop={1}
      gap={2}
    >
      <HomeAsciiArt />
      <HomePrompt />
    </box>
  );
}
