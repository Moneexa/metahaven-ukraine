import { Box } from "@mantine/core";
import introPic from "/Rectangle 12.png";
import { ImageInfoPanel } from "./components/image-info-panel";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";
export const SubIntro = () => {
  const lang = useLang();
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
            {
              heading:
                translations["DIGITAL CONSERVATION AND AWARENESS EFFORTS1"][
                  lang
                ],
              size: "large",
            },
            {
              heading:
                translations["DIGITAL CONSERVATION AND AWARENESS EFFORTS2"][
                  lang
                ],
              size: "small",
            },
            {
              heading:
                translations["DIGITAL CONSERVATION AND AWARENESS EFFORTS3"][
                  lang
                ],
              size: "large",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Box>
    </>
  );
};
