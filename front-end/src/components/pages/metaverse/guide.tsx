import { Flex } from "@mantine/core";

export function Guide() {
    return <Flex pos="absolute" h="100%" w="100%" top={0} left={0} bg="#00000094" c="white" style={{zIndex: 1}} align="center" justify="center">
        <h3>Click inside to control / Press Escape on your keyboard to exit</h3>
    </Flex>
}