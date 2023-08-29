import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./components/landing-page/landing-page.tsx";
import { Metaverse } from "./components/metaverse/metaverse.tsx";
import { Layout } from "./layout.tsx";
import { Donate } from "./components/donate/donate.tsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <MantineProvider theme={{ fontFamily: "var(--archivo)" }}>
          <Layout />
        </MantineProvider>
      }
    >
      <Route index element={<LandingPage />} />
      <Route path="metaverse" element={<Metaverse />} />
      <Route path="donate" element={<Donate />} />
    </Route>
  )
);
