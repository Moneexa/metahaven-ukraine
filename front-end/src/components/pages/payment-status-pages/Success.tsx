import { Flex, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
export const Success = () => {
  return (
    <Flex direction="column" align="center" justify="center" style={{flex: 1}}>
      <IconCheck size={48} style={{ color: "#00ff00" }} />
      <Text align="center" size="lg" weight={700} mt="sm">
        Donation Successful
      </Text>
      <Text align="center" mt="sm">
        Thank you for your donation. Your transaction was successful.
      </Text>
    </Flex>
  );
};
