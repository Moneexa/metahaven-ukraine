import { Text } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";

interface Params {
  to: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}
export function Link({ text, to, isActive, onClick }: Params) {
  return (
    <RouterLink
      onClick={onClick}
      to={to}
      style={{
        border: isActive ? "2px solid white" : "2px solid transparent",
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
