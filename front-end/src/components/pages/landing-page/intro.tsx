import { FC } from "react";
import { Container, Box, Text, Flex } from "@mantine/core";
import { AccessButton } from "../../buttons/access-hub-button";
import { DonateButton } from "../../buttons/donate-button";
interface Props {
  displayComp: string;
}
export const IntroComp: FC<Props> = ({ displayComp }) => {
  return (
    <Box
      style={{ display: displayComp }}
      p={0}
      m={0}
      px={{ md: "132px", base: "20px" }}
      pt={{ base: "50px", md: "100px", lg: "140px" }}
    >
      <Flex direction="column" align="start" w="100%">
        <Text
          fs="normal"
          fz={{ base: "16px", md: "30px" }}
          fw={300}
          c="white"
          className="archivo-font"
        >
          Ukrainian Landmarks for posterity
        </Text>
        <Flex direction="column">
          <Text fz={{ base: "40px", md: "75px" }} fw={400} c="white">
            Metahaven
          </Text>
          <Text fz={{ base: "40px", md: "75px" }} fw={400} c="white">
            Ukraine
          </Text>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          pt={{ base: "24px", md: "144px" }}
          w="100%"
          justify={{ md: "space-between" }}
        >
          <Container p={0} m={0} mb={90}>
            <AccessButton title="access the landmarks hub" />
          </Container>

          <Container p={0} m={0} mb={{ base: "13px", md: "90px" }}>
            <DonateButton title="Donate" />
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
};
