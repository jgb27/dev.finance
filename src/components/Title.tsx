import { HStack, VStack, Text } from "@chakra-ui/react"

interface title {
    color: string,
    font: string,
    fontFamily: string
}


const Title = ({ color, font, fontFamily }: title) => {
    return (
        <VStack>
            <HStack gap={0} fontFamily={fontFamily}>
                <Text as='b' fontSize={font} color={color}>DEV</Text>
                <Text color={color} fontSize={font}>.Finance</Text>
            </HStack>
        </VStack>
    );
};

export default Title;