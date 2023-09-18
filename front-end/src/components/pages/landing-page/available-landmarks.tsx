import { Box, Text } from "@mantine/core";
import landmark from "/landmark.jpeg";
import { ImageInfoPanel } from "./components/image-info-panel";
export const AvailableLandMarks = () => {
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
      <Box
        py={{ base: "60px", md: "124px" }}
        px={{ base: "20px", lg: "130px" }}
      >
        <ImageInfoPanel
          imgSrc={landmark}
          imgPosition="left"
          headings={[
            { heading: "Kharkiv government", size: "large" },
            { heading: "building", size: "large" },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          accessBtn
        />
      </Box>
    </div>
  );
};
