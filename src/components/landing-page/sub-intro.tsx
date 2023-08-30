import { Flex, Container, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import introPic from "/Rectangle 12.png";
export const SubIntro = () => {
  const mobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      <Flex
        direction={{ md: "row", base: "column" }}
        py={{ base: "60px", md: "124px" }}
        px={{ base: "20px", md: "130px" }}
      >
        <Flex
          direction="column"
          maw={{ md: "505px" }}
          pr={{ lg: "95px", md: "20px" }}
        >
          <Text
            c="white"
            fz={{ base: "20px", md: "48px" }}
            fw={400}
            lh={{ base: "24px", md: "60px" }}
          >
            Digital Conservation
          </Text>
          <Text
            c="white"
            fz={{ base: "20px", md: "48px" }}
            fw={400}
            lh={{ base: "24px", md: "60px" }}
          >
            and
          </Text>
          <Text
            c="white"
            fz={{ base: "20px", md: "48px" }}
            fw={400}
            lh={{ base: "24px", md: "60px" }}
          >
            {" "}
            awareness efforts
          </Text>
          {mobile && (
            <Container maw={{ base: "100%", md: "578px" }} pt={20} p={0} m={0}>
              <Image src={introPic} w="100" h="auto" />
            </Container>
          )}
          <Text
            c="white"
            fz={{ md: "16px", base: "14px" }}
            fw={400}
            py={{ base: "20px", md: "50px" }}
            lh={{ md: "24px" }}
            className="archivo-font"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Flex>
        {!mobile && (
          <Container maw={{ base: "100%", md: "600px" }} p={0} m={0}>
            <Image src={introPic} w="100" h="auto" />
          </Container>
        )}
      </Flex>
    </>
  );
};
