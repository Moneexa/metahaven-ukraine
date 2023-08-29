import { useState } from "react";
import { Flex, Container, Text, Box } from "@mantine/core";
import { AlternateTwo } from "./alternateTwoPic";
import accesshub from "/accessHub.jpeg";
export const Metaverse = () => {
  const [display, setDisplay] = useState("flex");
  const donateNowClick = () => {
    if (display === "flex") {
      setDisplay("none");
    }
  };
  return (
    <div style={{ backgroundColor: "#4D24A8" }}>
      <Flex justify="flex-start" direction={{ md: "row", sm: "column" }}>
        <Flex direction="row" align="start">
          <Container
            m={0}
            p={0}
            mt={{ md: "165px" }}
            style={{ zIndex: "1" }}
            pos="absolute"
          >
            <button
              style={{
                color: "#000",
                backgroundColor: "#fff",
                padding: "18px 10px",
                textTransform: "uppercase",
                width: "130px",
                border: "none",
              }}
              onClick={donateNowClick}
            >
              <Text fz={{ base: "14px", md: "16px" }} fw={400}>
                Donate Now
              </Text>
            </button>
          </Container>

          {display === "none" ? (
            <AlternateTwo />
          ) : (
            <Flex
              justify="center"
              align="center"
              py={{ lg: "65px" }}
              px={{ lg: "130px" }}
            >
              <Box p={0} m={0} maw={1440} mih={{ base: "100vh", md: "100%" }}>
                <img
                  src={accesshub}
                  style={{
                    height: "100%",
                    width: "100%",
                    backdropFilter: "blur(6.5px)",
                  }}
                />
              </Box>

              <Container
                w={{ md: "285px" }}
                m={0}
                p={0}
                mx={{ base: "20px" }}
                style={{ zIndex: "1", position: "absolute" }}
              >
                <button
                  style={{
                    color: "#000",
                    backgroundColor: "#fff",
                    width: "100%",
                    padding: "18px 24px",
                    textTransform: "uppercase",
                    border: "none",
                    boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
                  }}
                >
                  <Text fz={{ base: "14px", md: "16px" }} fw={400}>
                    Access the hub
                  </Text>
                </button>
              </Container>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
