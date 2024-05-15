import { HStack, VStack, Text } from "@chakra-ui/react"

interface title {
    color: string,
    fontSize: string,
    fontFamily: string
}

const Title = ({ color, fontSize , fontFamily }: title) => {
    return (
        <VStack>
            <HStack gap={0} fontFamily={fontFamily}>
                <Text as='b' fontSize={fontSize} color={color}>DEV</Text>
                <Text color={color} fontSize={fontSize}>.Finance</Text>
            </HStack>
        </VStack>
    );
};

export default Title;