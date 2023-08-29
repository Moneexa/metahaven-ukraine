import { useState } from "react";
import { Flex, Text } from "@mantine/core";
import "./slider.css";
export const Slider = () => {
  const [val, setVal] = useState("");
  const changeHandler = (event: { target: { value: string } }) => {
    setVal(event.target.value);
  };
  return (
    <>
      <Flex direction="row" justify="space-between">
        <Text fz={{ base: "14px", md: "16px" }} c="white" fw={400}>
          $20
        </Text>

        <Text fz={{ base: "14px", md: "16px" }} c="white" fw={400}>
          $1000
        </Text>
      </Flex>
      <div className="slidecontainer">
        <span
          style={{
            color: "white",
            position: "absolute",
            left: `${(Number(val) / 1020) * 100 - 3}%`,
            top: "-26px",
          }}
        >
          ${val}
        </span>
        <input
          type="range"
          min={20}
          max={1000}
          value={val}
          style={{
            background: "white",
            color: "white",
          }}
          onChange={changeHandler}
          className="slider"
          id="myRange"
        />
      </div>
    </>
  );
};
