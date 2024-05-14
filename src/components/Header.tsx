import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiChevronsRight } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import SearchInput from "./SearchInput";

interface IHeader {
    user: string
}

const Header = ({ user }: IHeader) => {
    return (
        <Flex
            w="84vw"
            padding="5"
            justify="space-between"
            bg="gray05"
        >
            <Flex
                justify="start"
                gap={5}
            >
                <Text
                    fontFamily="inter"
                    fontWeight="bold"
                    fontSize={24}
                    color="defaultBlack"
                >
                    Hello {user}
                </Text>
                <Flex
                    align={"center"}
                    gap={2}
                >
                    <FiChevronsRight fontWeight={200} color="gray03" />
                    <Text
                        fontFamily="inter"
                        fontWeight={400}
                        color="gray03"
                    >
                        {
                            new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                        }
                    </Text>
                </Flex>
            </Flex>
            <Flex
                paddingEnd={14}
                direction="row"
                justify={"center"}
                align={"center"}
                gap={5}
            >
                <Icon
                    as={MdOutlineNotifications}
                    fontSize={26}
                    color="gray03"
                />
                <SearchInput />
            </Flex>
        </Flex>
    );
}

export default Header;