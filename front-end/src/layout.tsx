import { IntroComp } from "./components/pages/landing-page/intro.tsx";
import { Footer } from "./components/footer.tsx";
import { useLocation } from "react-router-dom";
import { LangButton } from "./components/buttons/lang-button.tsx";
import { NavBar } from "./components/navbar.tsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";
import translations from "./languages/Translations.ts";
import { useLang } from "./hooks/lang.tsx";
export const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const lang = useLang();
  return (
    <>
      <Box
        style={{
          backgroundImage: "url('/Rectangle 3.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        bgp={{ base: "top center", xl: "center center" }}
      >
        <NavBar
          links={[
            {
              to: "/",
              text: translations["HOME"][lang],
              isActive: path === "/",
            },
            {
              to: "/metaverse",
              text: translations["METAVERSE"][lang],
              isActive: path === "/metaverse",
            },
            {
              to: "/donate",
              text: translations["DONATE"][lang],
              isActive: path === "/donate",
            },
            {
              to: "/about-page",
              text: translations["ABOUT PAGE"][lang],
              isActive: path === "/about-page",
            },
          ]}
          padding={{ md: "10px", base: "8px" }}
          rightContent={<LangButton />}
        />
        <IntroComp displayComp={path === "/" ? "block" : "none"} />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};
