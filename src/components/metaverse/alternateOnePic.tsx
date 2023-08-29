import { Container, Flex, Image } from "@mantine/core";
import ukraineLandmark from "/ukraineLandmark.jpeg";

export const AlternateOne = () => {
  return (
    <Flex
      justify="center"
      align="center"
      py={{ lg: "65px" }}
      px={{ lg: "130px" }}
    >
      <Container p={0} m={0} maw={1440}>
        <Image src={ukraineLandmark} w="100%" height="auto%" />
      </Container>
    </Flex>
  );
};
