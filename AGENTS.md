# Project Context

This project is an agent harness for content creators. Its goal is to help creators edit videos and manage agents across different verticals.
## Development Notes

- The OpenTUI CLI should be launched from the repo root with `bun run dev:cli`.
  The root script intentionally changes into `apps/cli` and runs Bun in silent
  mode instead of using `bun --filter @contentcode/cli dev`. Bun's workspace
  filter runner prefixes process output, which leaks into full-screen TUI
  rendering during development.
- Use kebab-case for source filenames, including React component files.
- Keep CLI screen composition under `apps/cli/src/screens/`. Put reusable or
  screen-specific UI pieces under `apps/cli/src/components/`, nested by feature
  when useful, instead of leaving components directly in `src`.
- OpenTUI React `<textarea>` is backed by an uncontrolled edit buffer. For
  submit/navigation flows, read the value from a `TextareaRenderable` ref via
  `ref.current?.plainText`; do not assume React `value`/`setValue` state is the
  source of truth. If OpenTUI skill context is unavailable or incomplete, inspect
  the installed `@opentui/react` and `@opentui/core` types/docs in `node_modules`.
