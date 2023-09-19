import { Flex, Text, RingProgress } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";

export const Graph = () => {
  const mobile = useMediaQuery("(max-width:760px)");
  const lang = useLang();
  return (
    <Flex direction="column" align="center">
      <RingProgress
        size={mobile ? 300 : 332}
        thickness={12}
        roundCaps
        label={
          <Flex justify="center" direction="column" align="center" ta="center">
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
              pt={18}
              ta="center"
              className="archivo-font"
            >
              $ 280,520.68
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
              className="archivo-font"
            >
              {translations["RAISED"][lang]}{" "}
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              pt={18}
              c="white"
              className="archivo-font"
            >
              1335
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
              className="archivo-font"
            >
              {translations["DONATIONS"][lang]}
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              pt={18}
              c="white"
              className="archivo-font"
            >
              $ 330,000
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
              className="archivo-font"
            >
              {translations["GOAL"][lang]}
            </Text>
          </Flex>
        }
        sections={[
          { value: 75, color: "#fff" },
          { value: 25, color: "rgba(255, 255, 255, 0.50)" },
        ]}
      />
    </Flex>
  );
};
