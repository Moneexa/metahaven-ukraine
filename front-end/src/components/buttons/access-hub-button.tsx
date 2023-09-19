import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../hooks/lang";
import translations from "../../languages/Translations";
interface Props {
  title?: string;
}
export const AccessButton = ({ title }: Props) => {
  const navigate = useNavigate();
  const lang = useLang();
  return (
    <button
      style={{
        padding: "18px 10px",
        width: "100%",
        textTransform: "uppercase",
        boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
      }}
      onClick={() => {
        navigate("/metaverse");
      }}
    >
      <Text fz={{ base: "14px", md: "16px" }} fw={400}>
        {title ? title : translations["ACCESS THE HUB"][lang]}
      </Text>
    </button>
  );
};
