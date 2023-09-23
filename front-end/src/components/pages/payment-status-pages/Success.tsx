import { Flex, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
export const Success = () => {
  return (
    <Flex direction="column" align="center" justify="center" mih="100vh">
      <IconCheck size={48} style={{ color: "#00ff00" }} />
      <Text align="center" size="lg" weight={700} mt="sm">
        Payment Successful
      </Text>
      <Text align="center" mt="sm">
        Thank you for your payment. Your transaction was successful.
      </Text>
    </Flex>
  );
};
