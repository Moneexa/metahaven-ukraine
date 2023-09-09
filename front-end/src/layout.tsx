import { IntroComp } from "./components/pages/landing-page/intro.tsx";
import { Footer } from "./components/footer.tsx";
import { useLocation } from "react-router-dom";
import { LangButton } from "./components/buttons/lang-button.tsx";
import { NavBar } from "./components/navbar.tsx";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/Rectangle 3.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
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
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
