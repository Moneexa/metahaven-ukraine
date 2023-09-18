import { Box } from "@mantine/core";
import comingSoon from "/comingSoon.png";
import { ImageInfoPanel } from "./components/image-info-panel";

export const ComingSoon = () => {
  return (
    <Box py={{ base: "60px", md: "124px" }} px={{ base: "20px", lg: "130px" }}>
      <ImageInfoPanel
        imgSrc={comingSoon}
        imgPosition="right"
        headings={[{ heading: "Coming Soon", size: "large" }]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        justifyCenter
      />
    </Box>
  );
};
