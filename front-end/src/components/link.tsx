import { Text } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";

interface Params {
  to: string;
  text: string;
  queryParams?: string;
  isActive?: boolean;
  onClick?: () => void;
}
export function Link({ text, to, queryParams, isActive, onClick }: Params) {
  return (
    <RouterLink
      onClick={onClick}
      to={{ pathname: to, search: queryParams }}
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
