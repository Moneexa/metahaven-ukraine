import { Flex, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
export const Failed = () => {
  return (
    <Flex direction="column" align="center" justify="center" mih="100vh">
      <IconX size={48} style={{ color: "red" }} />
      <Text align="center" size="lg" weight={700} mt="sm">
        Payment Failed.
      </Text>
      <Text align="center" mt="sm">
        Your Payment has been declined. Please try again later
      </Text>
    </Flex>
  );
};
