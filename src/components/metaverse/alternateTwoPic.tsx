import { useState } from "react";
import { Container, Flex, Text, Box } from "@mantine/core";
import accessHub from "/accessHub.jpeg";
import { IconCircle } from "../../assets/icon-circle";
import { IconLine } from "../../assets/icon-line";
import { AlternateOne } from "./alternateOnePic";
export const AlternateTwo = () => {
  const [display, setDisplay] = useState("flex");
  const donateNowClick = () => {
    if (display === "flex") {
      setDisplay("none");
    }
  };

  return display === "flex" ? (
    <Flex justify="center" py={{ lg: "65px" }} px={{ lg: "130px" }}>
      <Box p={0} m={0} maw={1440} mih={{ base: "100vh", md: "100%" }}>
        <img src={accessHub} style={{ height: "100%", width: "100%" }} />
      </Box>
      <Container
        mt={{ lg: "87px" }}
        ml={{ lg: "913px" }}
        p={0}
        m={0}
        w={166}
        pos="absolute"
        style={{ zIndex: "1" }}
      >
        <button
          style={{
            padding: "18px 24px",
            textTransform: "uppercase",
            width: "100%",
          }}
          onClick={donateNowClick}
        >
          <Text fz={{ base: "14px", md: "16px" }} fw={400}>
            access landmark
          </Text>
        </button>
      </Container>
      <Box
        pos="absolute"
        style={{ zIndex: "1" }}
        mt={{ lg: "180px" }}
        ml={{ lg: "723px" }}
      >
        <IconLine />
      </Box>
      <Box
        pos="absolute"
        style={{ zIndex: "1" }}
        mt={{ lg: "218px" }}
        ml={{ lg: "535px" }}
      >
        <IconCircle />
      </Box>
    </Flex>
  ) : (
    <AlternateOne />
  );
};
