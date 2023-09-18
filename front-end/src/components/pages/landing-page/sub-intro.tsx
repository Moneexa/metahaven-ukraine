import { Box } from "@mantine/core";
import introPic from "/Rectangle 12.png";
import { ImageInfoPanel } from "./components/image-info-panel";
export const SubIntro = () => {
  return (
    <>
      <Box
        py={{ base: "60px", md: "124px" }}
        px={{ base: "20px", lg: "130px" }}
      >
        <ImageInfoPanel
          imgSrc={introPic}
          imgPosition="right"
          headings={[
            { heading: "Digital Conservation", size: "large" },
            { heading: "and", size: "small" },
            { heading: "awareness efforts", size: "large" },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Box>
    </>
  );
};
