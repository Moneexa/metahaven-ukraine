import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./components/pages/landing-page/landing-page.tsx";
import { Metaverse } from "./components/pages/metaverse/metaverse.tsx";
import { Layout } from "./layout.tsx";
import { Donate } from "./components/pages/donate/donate.tsx";

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
        <MantineProvider
          theme={{ fontFamily: "Benzin-Medium, Archivo-Regular" }}
        >
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
