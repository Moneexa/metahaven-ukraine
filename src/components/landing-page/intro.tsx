import { FC } from "react";
import { Container, Text, Flex } from "@mantine/core";
interface Props {
  displayComp: string;
}
export const IntroComp: FC<Props> = ({ displayComp }) => {
  return (
    <Container
      style={{ display: displayComp }}
      p={0}
      m={0}
      pl={{ md: "132px" }}
      px={{ base: "30px" }}
      pt={{ base: "50px", md: "100px", lg: "140px" }}
    >
      <Flex direction="column" align="start" w="100%">
        <Text fs="normal" fz={{ base: "16px", md: "30px" }} fw={300} c="white">
          Ukrainian Landmarks for posterity
        </Text>
        <Text
          fz={{ base: "40px", md: "75px" }}
          fw={400}
          c="white"
          w={{ base: "300px", md: "653px" }}
        >
          Metahaven Ukraine
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          pt={{ base: "24px", md: "144px" }}
          w="100%"
          justify={{ md: "space-between" }}
        >
          <Container p={0} m={0} mb={90} w={{ lg: "328px", base: "298px" }}>
            <button
              style={{
                textTransform: "uppercase",
                padding: "18px 24px",
                width: "100%",
                boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
              }}
            >
              <Text fz={{ base: "14px", md: "16px" }} fw={400}>
                Acccess the landmark's hub
              </Text>
            </button>
          </Container>

          <Container
            p={0}
            m={0}
            mb={{ base: "13px", md: "90px" }}
            w={{ base: "134px", lg: "144px" }}
          >
            <button
              style={{
                padding: "18px 10px",
                width: "100%",
                textTransform: "uppercase",
                boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
              }}
            >
              <Text fz={{ base: "14px", md: "16px" }} fw={400}>
                Donate now
              </Text>
            </button>
          </Container>
        </Flex>
      </Flex>
    </Container>
  );
};
