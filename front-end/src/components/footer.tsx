import { Flex, Text, Image, Container } from "@mantine/core";
import socialMedia from "/socialMedia.png";
export const Footer = () => {
  return (
    <Flex
      bg="black"
      direction="row"
      justify="space-between"
      px={{ base: "24px", lg: "126px" }}
      py={{ base: "24px" }}
      pt={{ lg: "54px" }}
      pb={{ lg: "41px" }}
      align="center"
    >
      <Flex direction={"column"}>
        <Text
          c="white"
          fz={{ md: "16px", base: "10px" }}
          fw={400}
          className="archivo-font"
        >
          METAHAVEN
        </Text>
        <Text
          c="white"
          fz={{ md: "16px", base: "10px" }}
          fw={400}
          className="archivo-font"
        >
          xxx I Street, NW Suite Washington,
        </Text>
        <Text
          c="white"
          fz={{ md: "16px", base: "10px" }}
          fw={400}
          className="archivo-font"
        >
          District of Columbia 20006
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text
          c="white"
          tt={"uppercase"}
          fz={{ md: "16px", base: "10px" }}
          fw={400}
          className="archivo-font"
        >
          Follow us here
        </Text>
        <Container p={0} m={0} maw={224}>
          <Image src={socialMedia} w="100%" height="auto" />
        </Container>
      </Flex>
    </Flex>
  );
};
