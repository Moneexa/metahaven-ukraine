import { Flex, Box, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import landmark from "/landmark.jpeg";
import { AccessButton } from "../../buttons/access-hub-button";
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
        justify={{ md: "space-between", base: "center" }}
        align="center"
        px={{ base: "20px", md: "130px" }}
      >
        {!mobile && (
          <Box m={0} p={0} maw={{ md: "505px" }}>
            <Image w="100%" h="auto" src={landmark} />
          </Box>
        )}
        <Flex direction="column" pl={{ md: "99px" }}>
          <Text
            fz={{ base: "20px", md: "48px" }}
            fw={400}
            c="white"
            lh={{ base: "28px", md: "67px" }}
          >
            Kharkiv government building
          </Text>
          {mobile && (
            <Box m={0} pt={20} p={0}>
              <Image w="100%" h="auto" src={landmark} />
            </Box>
          )}
          <Text
            fz={{ md: "16px", base: "14px" }}
            fw={400}
            c="white"
            pt={32}
            w="100%"
            className="archivo-font"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Box
            p={0}
            m={0}
            mt={{ base: "30px", md: "75px" }}
            w={{ base: "100%", md: "276px" }}
          >
            <AccessButton />
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
