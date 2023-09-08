import { useState } from "react";
import { Flex, Container, Box } from "@mantine/core";
import { AlternateTwo } from "./alternateTwoPic";
import { DonateButton } from "../../buttons/donate-button";
import { assignStreams } from "../../../service-provider/streaming/assign-streams";
// import { AccessButton } from "../../buttons/access-hub-button";
export const Metaverse = () => {
  const [display, setDisplay] = useState("flex");
  const donateNowClick = async () => {
    console.log(await assignStreams());
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
              pl={{ lg: "130px" }}
            >
              <Box
                p={0}
                m={0}
                w={{ base: "390px", md: "1050px" }}
                h={{ base: "350px", md: "554px" }}
              >
                <iframe
                  src="https://streams.vagon.io/streams/2a0ee0ba-b550-4f59-a046-fb0776221157"
                  style={{ width: "100%", height: "100%" }}
                />

                {/* <img */}
                {/* src={accesshub} */}
                {/* style={{ */}
                {/* height: "100%", */}
                {/* width: "100%", */}
                {/* backdropFilter: "blur(6.5px)", */}
                {/* }} */}
                {/* /> */}
              </Box>
              {/* <Container
                w={{ md: "285px" }}
                m={0}
                p={0}
                mx={{ base: "20px" }}
                style={{ zIndex: "1", position: "absolute" }}
              >
                <AccessButton />
              </Container> */}
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
