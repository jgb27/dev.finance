import { Flex, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
    title: string
    icon: React.ReactElement,
    size: string[],
    select: boolean
}

const MenuItem = ({ title, icon, size, select }: MenuItemProps) => {
    const navigate = useNavigate();
    return (
        <Link
            w="100%"
            padding="2"
            paddingRight="12"
            borderRadius="md"
            bg={select ? "primary" : "transparent"}
            _hover={select ? {} : { opacity: 0.7, cursor: "pointer" }}
            transition="0.2s"
            onClick={() => {
                if(title === "Logout") {
                    navigate("/signin");
                } else {
                    navigate(`/${title.toLowerCase()}`);
                }
            }}
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
        </Link>
    )
}

export default MenuItem;