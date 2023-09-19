import { FC } from "react";
import { Container, Box, Text, Flex } from "@mantine/core";
import { AccessButton } from "../../buttons/access-hub-button";
import { DonateButton } from "../../buttons/donate-button";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";
interface Props {
  displayComp: string;
}
export const IntroComp: FC<Props> = ({ displayComp }) => {
  const lang = useLang();
  return (
    <Box
      style={{ display: displayComp }}
      p={0}
      m={0}
      px={{ md: "132px", base: "20px" }}
      pt={{ base: "50px", md: "100px", lg: "140px" }}
    >
      <Flex direction="column" align="start" w="100%">
        <Text
          fs="normal"
          fz={{ base: "16px", md: "30px" }}
          fw={300}
          c="white"
          className="archivo-font"
        >
          {translations["UKRAINIAN LANDMARKS FOR POSTERITY"][lang]}
        </Text>
        <Flex direction="column">
          <Text fz={{ base: "40px", md: "75px" }} fw={400} c="white">
            {translations["METAHAVEN UKRAINE"][lang].split(" ")[0]}
          </Text>
          <Text fz={{ base: "40px", md: "75px" }} fw={400} c="white">
            {translations["METAHAVEN UKRAINE"][lang].split(" ")[1]}
          </Text>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          pt={{ base: "24px", md: "144px" }}
          w="100%"
          justify={{ md: "space-between" }}
        >
          <Container p={0} m={0} mb={90}>
            <AccessButton
              title={translations["ACCESS THE LANDMARK'S HUB"][lang]}
            />
          </Container>

          <Container p={0} m={0} mb={{ base: "13px", md: "90px" }}>
            <DonateButton title={translations["DONATE"][lang]} />
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
};
