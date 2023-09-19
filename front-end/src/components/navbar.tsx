import { Burger, Box, Flex } from "@mantine/core";
import { useState } from "react";
import { Link } from "./link";
import { useLocation } from "react-router-dom";
interface Params {
  links: {
    to: string;
    text: string;
    isActive?: boolean;
  }[];
  padding: { md: string; base: string };
  rightContent: JSX.Element;
}

export function NavBar({ links, padding, rightContent }: Params) {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const location = useLocation();
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <Flex
        justify="center"
        align="center"
        id="navId"
        style={{ position: "relative", height: "70px" }}
        p={padding}
      >
        <Box
          style={{ justifyContent: "center", gap: 54 }}
          mr={{ lg: "190px", md: "130px" }}
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link) => (
            <Link
              to={link.to}
              queryParams={location.search}
              text={link.text}
              isActive={link.isActive}
            />
          ))}
        </Box>
        <Box style={{ right: 0, position: "absolute" }} pr={{ md: "130px" }}>
          <Box display={{ base: "none", md: "block" }}>{rightContent}</Box>
          <Box display={{ base: "block", md: "none" }}>
            <Burger
              color="#fff"
              opened={dropDownVisible}
              onClick={() => setDropDownVisible(!dropDownVisible)}
            />
          </Box>
        </Box>
      </Flex>
      {/* When it's a smaller screen */}
      {dropDownVisible && (
        <Box
          style={{
            gap: 40,
            flexDirection: "column",
            alignItems: "start",
            height: "calc(100vh - 70px)",
            backdropFilter: "blur(6.5px)",
            paddingTop: "40px",
            paddingLeft: "24px",
          }}
          display={{ base: "flex", md: "none" }}
        >
          <Box style={{ alignSelf: "center" }}>{rightContent}</Box>
          {links.map((link) => (
            <Link
              onClick={() => {
                setDropDownVisible(false);
              }}
              to={link.to}
              text={link.text}
              isActive={link.isActive}
            />
          ))}
        </Box>
      )}
    </div>
  );
}
