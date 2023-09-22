import { useState } from "react";
import { Text, Flex, Container, Card } from "@mantine/core";
import { Graph } from "./graph";
import { Slider } from "./slider";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";
export const Donate = () => {
  const lang = useLang();
  const [donate, setDonate] = useState(0);
  const handleDonate = (val: number) => {
    setDonate(val);
  };
  const donateButtonClick = () => {
    window.open(
      `${
        import.meta.env.DEV
          ? import.meta.env.VITE_BACKEND_PORT_LOCAL
          : import.meta.env.VITE_BACKEND_PORT_PROD
      }/create-checkout-session/${donate}`,
      "_blank"
    );
  };
  return (
    <Flex
      direction="column"
      style={{ backgroundColor: "#4D24A8" }}
      pl={{ md: "130px" }}
      pr={{ md: "160px" }}
      px={{ base: "20px" }}
      py="68px"
    >
      <Container p={0} m={0} maw={{ base: "100%", md: "955px" }}>
        <Text
          lh={{ md: "56px" }}
          tt="uppercase"
          w="100%"
          fz={{ md: "48px", base: "24px" }}
          fw={400}
          c="white"
        >
          {translations["DONATE TO SUPPORT THE RECONSTRUCTION EFFORTS"][lang]}
        </Text>
      </Container>
      <Container p={0} m={0} mt={24} maw={580}>
        <Text
          c="white"
          fz={{ md: "16px" }}
          fw={400}
          w="100%"
          className="archivo-font"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Container>
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Flex direction="column" w="100%">
          <Text
            fz={{ md: "16px", base: "14px" }}
            pt={40}
            fw={400}
            c="white"
            className="archivo-font"
          >
            {translations["I WOULD LIKE TO"][lang]}
          </Text>
          <Flex
            direction="row"
            gap={{ base: "18px", md: "32px" }}
            pt={32}
            w={{ md: "442px", base: "100%" }}
          >
            <button
              onClick={() => handleDonate(50)}
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
              $50
            </button>
            <button
              onClick={() => handleDonate(100)}
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
              $100
            </button>
            <button
              onClick={() => handleDonate(150)}
              style={{
                color: "white",
                backgroundColor: "transparent",
                padding: "8px 24px",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
              $150
            </button>
          </Flex>
          <Container m={0} p={0} pt={58} maw={{ md: "564px" }}>
            <Slider donate={donate} />
          </Container>
          <Container m={0} p={0} pt={72} w={{ base: "100%", md: "194px" }}>
            <button
              disabled={donate <= 0}
              style={{
                padding: "18px 10px",
                width: "100%",
                textTransform: "uppercase",
                boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
              }}
              onClick={donateButtonClick}
            >
              <Text fz={{ base: "14px", md: "16px" }} tt="uppercase" fw={400}>
                {translations["DONATE NOW"][lang]}
              </Text>
            </button>
          </Container>
        </Flex>
        <Graph />
      </Flex>
      <Flex direction="column" pt={63}>
        <Flex direction="row" align="center">
          <Text
            tt="uppercase"
            fz={{ base: "14px", md: "16px" }}
            fw={400}
            c="white"
            className="archivo-font"
          >
            {translations["DONOR WALL"][lang]}
          </Text>
          <button
            className="archivo-font"
            style={{
              marginLeft: "9px",
              padding: "8px",
              background: "transparent",
              border: "2px solid #FFF",
              color: "white",
            }}
          >
            361
          </button>
        </Flex>
        <Flex direction="column" w="100%" pt={27} gap={26}>
          <Card p={18}>
            <Text
              fz={{ base: "14px", md: "16px" }}
              tt="uppercase"
              fw={700}
              className="archivo-font"
            >
              anonymous | $103.83
            </Text>
            <Text
              fz={{ base: "14px", md: "16px" }}
              pt={18}
              fw={400}
              className="archivo-font"
            >
              I admire all your soldiers. firefighters, social, helpers. You
              Stand against the evil. do not give up. stay strong we are with
              you.
            </Text>
          </Card>
          <Card p={18}>
            <Text
              fz={{ base: "14px", md: "16px" }}
              tt="uppercase"
              fw={700}
              className="archivo-font"
            >
              anonymous | $103.83
            </Text>
            <Text
              fz={{ base: "14px", md: "16px" }}
              pt={18}
              fw={400}
              className="archivo-font"
            >
              I admire all your soldiers. firefighters, social, helpers. You
              Stand against the evil. do not give up. stay strong we are with
              you.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};
