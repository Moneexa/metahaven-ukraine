import { Box, Text } from "@mantine/core";
import landmark from "/landmark.jpeg";
import { ImageInfoPanel } from "./components/image-info-panel";
import { useLang } from "../../../hooks/lang";
import translations from "../../../languages/Translations";
export const AvailableLandMarks = () => {
  const lang = useLang();
  return (
    <div>
      <Text
        c="white"
        fz={{ base: "22px", md: "48px" }}
        pb={{ base: "15px", md: "85px" }}
        fw={400}
        ta="center"
      >
        {translations["AVAILABLE LANDMARKS"][lang]}
      </Text>
      <Box
        py={{ base: "60px", md: "124px" }}
        px={{ base: "20px", lg: "130px" }}
      >
        <ImageInfoPanel
          imgSrc={landmark}
          imgPosition="left"
          headings={[
            {
              heading: translations["KHARKIV GOVERNMENT BUILDING1"][lang],
              size: "large",
            },
            {
              heading: translations["KHARKIV GOVERNMENT BUILDING2"][lang],
              size: "large",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          accessBtn
        />
      </Box>
    </div>
  );
};
