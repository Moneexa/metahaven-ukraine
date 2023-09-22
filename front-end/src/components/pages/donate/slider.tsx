import { useState, useEffect } from "react";
import { Flex, Text } from "@mantine/core";
import "./slider.css";
export const Slider = (props: {
  donate: number;
  onChange: (amount: number) => void;
}) => {
  const [val, setVal] = useState("");
  useEffect(() => {
    setVal(`${props.donate}`);
  }, [props.donate]);
  const changeHandler = (event: { target: { value: string } }) => {
    setVal(event.target.value);
    props.onChange(Number(event.target.value));
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
        <span
          style={{
            color: "white",
            position: "absolute",
            left: `${(Number(val) / 1020) * 100 - 3}%`,
            bottom: "-26px",
          }}
        >
          {Number(val) > 0 && `$${val}`}
        </span>
      </div>
    </>
  );
};
