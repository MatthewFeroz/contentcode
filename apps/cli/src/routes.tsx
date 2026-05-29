import { createMemoryRouter } from "react-router";
import { AboutScreen } from "./screens/about-screen";
import { HealthScreen } from "./screens/health-screen";
import { HomeScreen } from "./screens/home-screen";
import { NotFoundScreen } from "./screens/not-found-screen";
import { SettingsScreen } from "./screens/settings-screen";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "/health",
    element: <HealthScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);
