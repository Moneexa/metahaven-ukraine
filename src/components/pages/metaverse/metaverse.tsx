import { useState } from "react";
import { Flex, Container, Box } from "@mantine/core";
import { AlternateTwo } from "./alternateTwoPic";
import accesshub from "/accessHub.jpeg";
import { DonateButton } from "../../buttons/donate-button";
import { AccessButton } from "../../buttons/access-hub-button";
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
            onClick={donateNowClick}
            style={{ zIndex: "1" }}
            pos="absolute"
            w="130px"
          >
            <DonateButton title="Donate" />
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
                <AccessButton />
              </Container>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
