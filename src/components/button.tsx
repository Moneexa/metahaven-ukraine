import { FC } from "react";
import { Button } from "@mantine/core";
interface Props {
  text: string;
  paddingHorizontal: { base: string; md: string };
  btnSize: string;
  variantType: string;
  btnColor: string;
  btnRadius: string;
  btnUpperCase: boolean;
  btnCompact: boolean;
}

export const ButtonComp: FC<Props> = ({ text }) => {
  return <Button className="px-5 py-5 ">{text}</Button>;
};
