import { Box, Flex, Text } from "@chakra-ui/react";

interface MenuItemProps {
    title: string
    icon: React.ReactElement,
    size: string[],
    select: boolean
}

const MenuItem = ({ title, icon, size, select }: MenuItemProps) => {
    return (
        <Box
            w="100%"
            padding="2"
            paddingRight="12"
            borderRadius="md"
            bg={select ? "primary" : "transparent"}
            _hover={select ? {} : { opacity: 0.7, cursor: "pointer" }}
        >
            <Flex justify="start" align="center" gap={2}>
                {icon}
                <Text
                    fontSize={size}
                    color="white"
                    fontFamily="inter"
                    fontWeight="semibold"
                    letterSpacing="1"
                >
                    {title}
                </Text>
            </Flex >
        </Box>
    )
}

export default MenuItem;