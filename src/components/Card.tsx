import { Button, Flex, Text } from "@chakra-ui/react";
import { BsBank, BsPiggyBank } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

export interface CardAccountProps {
    title: string;
    subTitle: string;
    type: string;
    account: {
        number: number;
        totalAmount: number;
    };
}

const Title = ({ title, subTitle, type }: { title: string, subTitle: string, type: string }) => {
    const iconMap: Record<string, JSX.Element> = {
        "bank": <BsBank size={16} />,
        "card": <FaCreditCard size={16} />,
        "investment": <BsPiggyBank size={16} />,
    };

    return (
        <Flex direction="row" gap={2} justify="space-between">
            <Text color="black" fontSize="16" fontFamily="poppins">
                {title}
            </Text>
            <Flex gap={2} alignItems="center">
                {iconMap[type] || <BsBank size={16} />}
                <Text color="defaultBlack" fontSize="16" fontFamily="poppins">
                    {subTitle}
                </Text>
            </Flex>
        </Flex>
    );
};

const Account = ({ account, type }: { type: string, account: { number: number, totalAmount: number } }) => {
    const formatAccountNumber = (accountNumber: number) => {
        const accountNumberString = accountNumber.toString();
        const hiddenLastTwoDigits = accountNumberString.slice(0, -2);
        return `****${hiddenLastTwoDigits.slice(-4)}`;
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const getAccountType = (accountType: string) => {
        const typeMap: Record<string, string> = {
            "bank": "Total Balance",
            "investing": "Investing",
            "card": "Limit",
            "credit": "Credit Card",
        };
        return typeMap[accountType] || "Total Balance";
    };

    return (
        <Flex direction="column" gap={2}>
            {/* Account info Client*/}
            <Flex direction="column">
                <Text color="black" fontSize="16" fontWeight={600} fontFamily="poppins">
                    {formatAccountNumber(account.number)}
                </Text>
                <Text color="subText" fontSize="16" fontFamily="poppins">
                    Account Number
                </Text>
            </Flex>
            {/* Account info Balance */}
            <Flex direction="column">
                <Text color="black" fontSize="16" fontWeight={600} fontFamily="poppins">
                    {formatCurrency(account.totalAmount)}
                </Text>
                <Text color="subText" fontSize="16" fontFamily="poppins">
                    {getAccountType(type)}
                </Text>
            </Flex>
        </Flex>
    );
};

const CardAccount = ({ accountProps, removeAccount }: { accountProps: CardAccountProps, removeAccount: () => void }) => {
    const { title, subTitle, account, type } = accountProps;


    return (
            <Flex
                bg="card"
                borderRadius="10"
                padding="15"
                justify="space-between"
                direction="column"
                w="100%"
                h="100%"
                color="black"
                fontFamily="inter"
                shadow="md"
                gap={4}
            >
                <Flex direction="column" gap={3}>
                    <Title title={title} subTitle={subTitle} type={type} />
                    <Account account={account} type={type} />
                </Flex>

                <Flex direction="row" justify="space-between" gap={4}>
                    <Button
                        color="primary"
                        bg="transparent"
                        fontSize="16"
                        width="22%"
                        _hover={{ transform: "scale(1.03)" }}
                        fontWeight={400}
                        justifyContent="start"
                        onSubmit={() => console.log("Edit")}
                        borderRadius={5}
                        onClick={removeAccount}
                    >
                        Remove
                    </Button>
                    <Button
                        color="white"
                        bg="primary"
                        opacity={0.8}
                        fontSize="16"
                        width="40%"
                        fontWeight={400}
                        onSubmit={() => console.log("Edit")}
                        borderRadius={5}
                        _hover={{ opacity: 1, transform: "scale(1.03)" }}
                    >
                        Edit
                    </Button>
                </Flex>
            </Flex>
    );
};

export default CardAccount;
