import { Flex, Text, RingProgress } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const Graph = () => {
  const mobile = useMediaQuery("(max-width:760px)");

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
            >
              $ 280,520.68
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
            >
              raised{" "}
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              pt={18}
              c="white"
            >
              1335
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
            >
              Donations
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              pt={18}
              c="white"
            >
              $ 330,000
            </Text>
            <Text
              fz={{ md: "16px", base: "14px" }}
              fw={400}
              tt="uppercase"
              c="white"
            >
              Goal
            </Text>
          </Flex>
        }
        sections={[
          { value: 10, color: "#fff" },
          { value: 15, color: "#fff" },
          { value: 25, color: "#fff" },
        ]}
      />
    </Flex>
  );
};
