import { Text } from "@mantine/core";
interface Params {
  title?: string;
}
export const DonateButton = ({ title }: Params) => {
  return (
    <button
      style={{
        padding: "18px 10px",
        width: "100%",
        textTransform: "uppercase",
        boxShadow: "14px 16px 8px 0px rgba(69, 19, 118, 0.50)",
      }}
    >
      <Text fz={{ base: "14px", md: "16px" }} fw={400}>
        {title ? title : "Donate Now"}
      </Text>
    </button>
  );
};
