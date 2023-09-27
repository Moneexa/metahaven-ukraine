import { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Card, Text } from "@mantine/core";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";

export const Feedback = () => {
  const lang = useLang();
  const [respList, setRespList] = useState([
    { name: "", amount: "", message: "" },
  ]);
  useEffect(() => {
    async function func() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PORT_PROD}/api/messages/last-two`
        );
        if (response) {
          const arr: { name: string; amount: string; message: string }[] = [];
          response.data.map(
            (value: { name: string; amount: string; message: string }) => {
              arr.push(value);
            }
          );
          setRespList(arr);
        }
      } catch (err) {
        console.log(err);
      }
    }
    func();
  }, [respList]);
  return (
    <>
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
      </Flex>

      <Flex direction="column" w="100%" pt={27} gap={26}>
        {respList.map((resp, index) => {
          return (
            <Card p={18} key={index}>
              <Text
                fz={{ base: "14px", md: "16px" }}
                tt="uppercase"
                fw={700}
                className="archivo-font"
              >
                {resp.name} | {resp.amount}
              </Text>
              <Text
                fz={{ base: "14px", md: "16px" }}
                pt={18}
                fw={400}
                className="archivo-font"
              >
                {resp.message}
              </Text>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};
