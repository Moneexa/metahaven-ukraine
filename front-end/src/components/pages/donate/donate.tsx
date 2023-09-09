import { Text, Flex, Container, Card } from "@mantine/core";
import { Graph } from "./graph";
import { Slider } from "./slider";
export const Donate = () => {
  return (
    <Flex
      direction="column"
      style={{ backgroundColor: "#4D24A8" }}
      pl={{ md: "130px" }}
      pr={{ md: "160px" }}
      px={{ base: "20px" }}
      py="68px"
    >
      <Container p={0} m={0} maw={{ base: "100%", md: "955px" }}>
        <Text
          lh={{ md: "56px" }}
          tt="uppercase"
          w="100%"
          fz={{ md: "48px", base: "24px" }}
          fw={400}
          c="white"
        >
          Donate to Support the Reconstruction Efforts
        </Text>
      </Container>
      <Container p={0} m={0} mt={24} maw={580}>
        <Text
          c="white"
          fz={{ md: "16px" }}
          fw={400}
          w="100%"
          className="archivo-font"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Container>
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Flex direction="column" w="100%">
          <Text
            fz={{ md: "16px", base: "14px" }}
            pt={40}
            fw={400}
            c="white"
            className="archivo-font"
          >
            I would like to give
          </Text>
          <Flex
            direction="row"
            gap={{ base: "18px", md: "32px" }}
            pt={32}
            w={{ md: "442px", base: "100%" }}
          >
            <button
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
              }}
            >
              $50
            </button>
            <button
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
              }}
            >
              $50
            </button>
            <button
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
              }}
            >
              $50
            </button>
          </Flex>
          <Container m={0} p={0} pt={58} maw={{ md: "564px" }}>
            <Slider />
          </Container>
          <Container m={0} p={0} pt={72} w={{ base: "100%", md: "194px" }}>
            <button
              style={{
                padding: "18px 10px",
                width: "100%",
                textTransform: "uppercase",
                boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
              }}
            >
              <Text fz={{ base: "14px", md: "16px" }} tt="uppercase" fw={400}>
                donate now
              </Text>
            </button>
          </Container>
        </Flex>
        <Graph />
      </Flex>
      <Flex direction="column" pt={63}>
        <Flex direction="row" align="center">
          <Text
            tt="uppercase"
            fz={{ base: "14px", md: "16px" }}
            fw={400}
            c="white"
            className="archivo-font"
          >
            Donor wall
          </Text>
          <button
            className="archivo-font"
            style={{
              marginLeft: "9px",
              padding: "8px",
              background: "transparent",
              border: "2px solid #FFF",
              color: "white",
            }}
          >
            361
          </button>
        </Flex>
        <Flex direction="column" w="100%" pt={27} gap={26}>
          <Card p={18}>
            <Text
              fz={{ base: "14px", md: "16px" }}
              tt="uppercase"
              fw={700}
              className="archivo-font"
            >
              anonymous | $103.83
            </Text>
            <Text
              fz={{ base: "14px", md: "16px" }}
              pt={18}
              fw={400}
              className="archivo-font"
            >
              I admire all your soldiers. firefighters, social, helpers. You
              Stand against the evil. do not give up. stay strong we are with
              you.
            </Text>
          </Card>
          <Card p={18}>
            <Text
              fz={{ base: "14px", md: "16px" }}
              tt="uppercase"
              fw={700}
              className="archivo-font"
            >
              anonymous | $103.83
            </Text>
            <Text
              fz={{ base: "14px", md: "16px" }}
              pt={18}
              fw={400}
              className="archivo-font"
            >
              I admire all your soldiers. firefighters, social, helpers. You
              Stand against the evil. do not give up. stay strong we are with
              you.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};
