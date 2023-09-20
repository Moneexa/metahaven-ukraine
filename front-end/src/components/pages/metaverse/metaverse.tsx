import { useEffect } from "react";
import { Container, Box } from "@mantine/core";
import { DonateButton } from "../../buttons/donate-button";
import { streamResponse } from "../../../service-provider/streaming/stream-response";
import { useLang } from "../../../hooks/lang";
import translations from "../../../languages/Translations";
// import { AccessButton } from "../../buttons/access-hub-button";
export const Metaverse = () => {
  const lang = useLang();
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
        <DonateButton title={translations["DONATE"][lang]} />
      </Container>
      <Box
        mx={{ md: "130px" }}
        my={{ md: "65px" }}
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <iframe
          src="https://streams.vagon.io/streams/6c087943-62d2-4736-b293-3400a598a4a2"
          style={{ width: "100%", flexGrow: 1 }}
        />
      </Box>
    </div>
  );
};
