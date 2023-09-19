import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../hooks/lang";
import translations from "../../languages/Translations";
interface Params {
  title?: string;
}
export const DonateButton = ({ title }: Params) => {
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
        navigate("/donate");
      }}
    >
      <Text fz={{ base: "14px", md: "16px" }} fw={400}>
        {title ? title : translations["COMING SOON"][lang]}
      </Text>
    </button>
  );
};
