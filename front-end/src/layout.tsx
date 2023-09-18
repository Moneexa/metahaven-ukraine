import { IntroComp } from "./components/pages/landing-page/intro.tsx";
import { Footer } from "./components/footer.tsx";
import { useLocation } from "react-router-dom";
import { LangButton } from "./components/buttons/lang-button.tsx";
import { NavBar } from "./components/navbar.tsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";
export const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
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
            { to: "/", text: "HOME", isActive: path === "/" },
            {
              to: "/metaverse",
              text: "METAVERSE",
              isActive: path === "/metaverse",
            },
            { to: "/donate", text: "DONATE", isActive: path === "/donate" },
            { to: "/", text: "ABOUT PAGE" },
          ]}
          padding="10px"
          rightContent={<LangButton />}
        />
        <IntroComp displayComp={path === "/" ? "block" : "none"} />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};
