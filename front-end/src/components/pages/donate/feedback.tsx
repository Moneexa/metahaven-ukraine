import { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Card, Text } from "@mantine/core";
import translations from "../../../languages/Translations";
import { useLang } from "../../../hooks/lang";

export const Feedback = () => {
  const lang = useLang();
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function func() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_WEBHOOK_ENDPOINT}`
        );
        if (response) {
          const messageExtracted = response?.data.customFields?.[0].text.value;
          setMessage(messageExtracted);
          const amountTotal = (
            parseFloat(response?.data.amount_total) / 100
          ).toFixed(2);
          setAmount(`${amountTotal}`);
          const donor = response?.data.customer_details.name;
          setDonorName(donor);
        }
      } catch (err) {
        console.log(err);
      }
    }
    func();
  }, [message, donorName, amount]);
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
        <Card p={18}>
          <Text
            fz={{ base: "14px", md: "16px" }}
            tt="uppercase"
            fw={700}
            className="archivo-font"
          >
            {donorName} | {amount}
          </Text>
          <Text
            fz={{ base: "14px", md: "16px" }}
            pt={18}
            fw={400}
            className="archivo-font"
          >
            {message}
          </Text>
        </Card>
      </Flex>
    </>
  );
};
