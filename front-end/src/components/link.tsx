import { Text } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";

interface Params {
  to: string;
  text: string;
  isActive?: boolean;
}
export function Link({ text, to, isActive }: Params) {
  return (
    <RouterLink
      to={to}
      style={{
        border: isActive ? "2px solid white" : "none",
        textDecoration: "none",
      }}
    >
      <Text
        py={{ base: "2px", md: "4px" }}
        px={{ base: "2px", md: "8px" }}
        fz={{ base: "12px", md: "16px" }}
        c="white"
        className="archivo-font"
      >
        {text}
      </Text>
    </RouterLink>
  );
}
