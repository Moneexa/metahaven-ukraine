import { Image, Text, Flex, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import comingSoon from "/comingSoon.jpeg";

export const ComingSoon = () => {
  const mobile = useMediaQuery("(max-width:767px)");
  return (
    <div>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        px={{ base: "24px", md: "130px" }}
        py={45}
      >
        <Flex direction="column" align="start" justify="center">
          <Text
            c="white"
            fz={{ base: "22px", md: "48px" }}
            fw={400}
            lh={{ base: "28px", md: "67px" }}
          >
            Coming Soon
          </Text>
          {mobile && (
            <Container maw="100%" pt={20} p={0} m={0} pl={{ md: "95px" }}>
              <Image src={comingSoon} w="100%" h="auto" />
            </Container>
          )}
          <Text
            fz={{ base: "14px", md: "16px" }}
            pt={38}
            fw={400}
            c="white"
            className="archivo-font"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Flex>
        {!mobile && (
          <Container maw={580} p={0} m={0} pl={{ md: "95px" }}>
            <Image src={comingSoon} w="100%" h="auto" />
          </Container>
        )}
      </Flex>
    </div>
  );
};
