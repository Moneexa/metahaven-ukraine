import { Flex, Text, Container } from "@mantine/core";

export const DonateNow = () => {
  return (
    <div>
      <Flex
        direction={{ base: "column", md: "row" }}
        py={45}
        px={{ md: "130px", base: "20px" }}
        align="center"
      >
        <Text
          fz={{ md: "16px", base: "14px" }}
          fw={400}
          c="white"
          maw={{ md: "805px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Container
          p={0}
          m={0}
          pt={{ base: "20px", md: "0px" }}
          ml={{ md: "182px" }}
          w={{ md: "194px", base: "100%" }}
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
              donate now
            </Text>
          </button>
        </Container>
      </Flex>
    </div>
  );
};
