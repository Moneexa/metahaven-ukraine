import { Flex, Container, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import landmark from "/landmark.jpeg";
export const AvailableLandMarks = () => {
  const mobile = useMediaQuery("(max-width:767px)");
  return (
    <div>
      <Text
        c="white"
        fz={{ base: "22px", md: "48px" }}
        pb={{ base: "15px", md: "85px" }}
        fw={400}
        ta="center"
      >
        available landmarks
      </Text>
      <Flex
        direction={{ md: "row", base: "column" }}
        justify="center"
        px={{ base: "20px", md: "130px" }}
      >
        {!mobile && (
          <Container m={0} p={0} maw={{ md: "505px", base: "100%" }}>
            <Image w="100%" h="auto" src={landmark} />
          </Container>
        )}
        <Flex direction="column" pl={{ md: "99px" }}>
          <Text
            fz={{ base: "20px", md: "48px" }}
            fw={400}
            c="white"
            lh={{ base: "28px", md: "67px" }}
            pt={40}
          >
            Kharkiv government building
          </Text>
          {mobile && (
            <Container m={0} pt={20} p={0} maw={{ base: "100%" }}>
              <Image w="100%" h="auto" src={landmark} />
            </Container>
          )}
          <Text
            fz={{ md: "16px", base: "14px" }}
            fw={400}
            c="white"
            pt={32}
            w="100%"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Container
            p={0}
            m={0}
            mt={{ base: "30px", md: "75px" }}
            w={{ base: "100%", md: "276px" }}
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
                access the hub
              </Text>
            </button>
          </Container>
        </Flex>
      </Flex>
    </div>
  );
};
