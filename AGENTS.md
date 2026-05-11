# Project Context

This project is an agent harness for content creators. Its goal is to help creators edit videos and manage agents across different verticals.
## Development Notes

- The OpenTUI CLI should be launched from the repo root with `bun run dev:cli`.
  The root script intentionally changes into `apps/cli` and runs Bun in silent
  mode instead of using `bun --filter @contentcode/cli dev`. Bun's workspace
  filter runner prefixes process output, which leaks into full-screen TUI
  rendering during development.
