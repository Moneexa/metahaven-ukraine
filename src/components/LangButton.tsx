import { Flex } from "@mantine/core";

export function LangButton() {
  return (
    <Flex>
      <Flex
        style={{
          borderColor: "white",
          borderLeft: "2px solid",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          padding: "2px 6px",
          color: "white",
        }}
      >
        LANGUAGE
      </Flex>
      <Flex
        style={{
          border: "2px solid white",
          padding: "2px 6px",
          color: "white",
          alignItems: "center",
        }}
      >
        EN
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path d="M8 4L2 7.4641L2 0.535899L8 4Z" fill="white" />
        </svg>
      </Flex>
    </Flex>
  );
}
