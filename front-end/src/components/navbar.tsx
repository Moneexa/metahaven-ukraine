import { Burger, Container, Flex } from "@mantine/core";
import { useState } from "react";
import { Link } from "./link";
import { useLocation } from "react-router-dom";
interface Params {
  links: {
    to: string;
    text: string;
    isActive?: boolean;
  }[];
  padding: string;
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
        style={{ position: "relative", padding: padding, height: "70px" }}
      >
        <Container
          style={{ justifyContent: "center", gap: 64 }}
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
        </Container>
        <Container
          style={{ right: 0, position: "absolute" }}
          pr={{ md: "10px", lg: "130px" }}
        >
          <Container display={{ base: "none", md: "block" }}>
            {rightContent}
          </Container>
          <Container display={{ base: "block", md: "none" }}>
            <Burger
              color="#fff"
              opened={dropDownVisible}
              onClick={() => setDropDownVisible(!dropDownVisible)}
            />
          </Container>
        </Container>
      </Flex>
      {/* When it's a smaller screen */}
      {dropDownVisible && (
        <Container
          style={{
            gap: 40,
            flexDirection: "column",
            alignItems: "start",
            height: "calc(100vh - 70px)",
            backdropFilter: "blur(6.5px)",
            paddingTop: "40px",
          }}
          display={{ base: "flex", md: "none" }}
        >
          <Container style={{ alignSelf: "center" }}>{rightContent}</Container>
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
        </Container>
      )}
    </div>
  );
}
