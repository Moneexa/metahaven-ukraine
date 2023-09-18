import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AccessButton } from "../../../buttons/access-hub-button";

type ImageInfoPanelParams = {
  imgSrc: string;
  imgPosition: "right" | "left";
  headings: { heading: string; size: "small" | "large" }[];
  description: string;
  justifyCenter?: boolean;
  accessBtn?: boolean;
};
export function ImageInfoPanel({
  imgSrc,
  imgPosition,
  headings,
  description,
  justifyCenter,
  accessBtn,
}: ImageInfoPanelParams) {
  const tablet = useMediaQuery("(max-width:991px)");
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      gap={{ base: 20, xl: 50 }}
    >
      <Flex
        style={{ order: imgPosition === "left" ? 2 : 1 }}
        direction="column"
        justify={justifyCenter ? "center" : "unset"}
      >
        {headings.map((heading) =>
          heading.size === "large" ? (
            <Text
              c="white"
              fz={{ base: "20px", md: "48px" }}
              fw={400}
              lh={{ base: "24px", md: "60px" }}
            >
              {heading.heading}
            </Text>
          ) : (
            <Text
              c="white"
              fz={{ base: "15px", md: "36px" }}
              fw={400}
              lh={{ base: "24px", md: "60px" }}
            >
              {heading.heading}
            </Text>
          )
        )}
        {tablet && <Image mt="20px" src={imgSrc} w="100" h="auto" />}
        <Text
          maw={{ lg: "650px" }}
          c="white"
          fz={{ md: "16px", base: "14px" }}
          fw={400}
          py={{ base: "20px", md: "50px" }}
          lh={{ md: "24px" }}
          className="archivo-font"
        >
          {description}
        </Text>
        {accessBtn && (
          <Box p={0} m={0} w={{ base: "100%", md: "276px" }}>
            <AccessButton />
          </Box>
        )}
      </Flex>

      {!tablet && (
        <Image
          src={imgSrc}
          style={{
            order: imgPosition === "left" ? 1 : 2,
            maxWidth: "600px",
            minWidth: "400px",
          }}
        />
      )}
    </Flex>
  );
}
