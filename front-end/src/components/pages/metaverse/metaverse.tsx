import { useEffect } from "react";
import { Container, Box } from "@mantine/core";
import { DonateButton } from "../../buttons/donate-button";
import { streamResponse } from "../../../service-provider/streaming/stream-response";
// import { AccessButton } from "../../buttons/access-hub-button";
export const Metaverse = () => {
  useEffect(() => {
    const funct = async () => {
      console.log(await streamResponse());
    };
    funct();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#4D24A8",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Container
        m={0}
        p={0}
        mt={{ md: "165px" }}
        style={{ zIndex: "1" }}
        top={{ md: "5%", base: "83px" }}
        pos="absolute"
        w="130px"
      >
        <DonateButton title="Donate" />
      </Container>
      <Box
        mx={{ md: "130px" }}
        my={{ md: "65px" }}
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <iframe
          src="https://streams.vagon.io/streams/2a0ee0ba-b550-4f59-a046-fb0776221157"
          style={{ width: "100%", flexGrow: 1 }}
        />
      </Box>
    </div>
  );
};
