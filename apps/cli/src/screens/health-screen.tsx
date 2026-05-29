import { useEffect, useState } from "react";
import { client } from "../lib/client";

export function HealthScreen() {
  const [data, setData] = useState<{ status: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client.health
      .$get()
      .then((res) => res.json())
      .then(setData)
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

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
      <text fg="#F85000">Server Health</text>
      {loading && <text fg="#8A2D00">Checking…</text>}
      {error && <text fg="#8A2D00">Error: {error}</text>}
      {data && <text fg="#8A2D00">Status: {data.status}</text>}
    </box>
  );
}
