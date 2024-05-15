import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import Layout from "../Layout/LayoutApp"
import CardAccount, { CardAccountProps } from "../components/Card";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } }
}

const Balance = () => {
    const [accounts, setAccounts] = useState<CardAccountProps[]>(JSON.parse(localStorage.getItem("accounts") || "[]") as CardAccountProps[])

    useEffect(() => {
        setAccounts(JSON.parse(localStorage.getItem("accounts") || "[]") as CardAccountProps[]);
    }, [localStorage.getItem("accounts")]);

    const addNewAccount = (account: CardAccountProps) => {
        localStorage.setItem("accounts", JSON.stringify([...accounts, account]));
        setAccounts([...accounts, account]);
    }

    const removeAccount = (index: number) => {
        const newAccounts = accounts.filter((_account, i) => i !== index);
        localStorage.setItem("accounts", JSON.stringify(newAccounts));
        setAccounts(newAccounts);
    }

    const Card = () => {
        return (
            <Flex
                bg="transparent"
                borderRadius="10"
                padding="15"
                justify="center"
                direction="column"
                w="100%"
                h="100%"
                color="black"
                fontFamily="inter"
                gap={4}
            >
                <Button
                    bg="primary"
                    fontFamily="inter"
                    fontWeight={600}
                    variant="solid"
                    border="none"
                    color="white"
                    borderRadius="10"
                    onClick={() => {
                        addNewAccount({
                            title: "Inter",
                            subTitle: "Bank Account",
                            type: "card",
                            account: {
                                number: 8547,
                                totalAmount: 103200
                            }
                        })
                    }}
                >
                    Add Account
                </Button>
                <Button
                    bg="transparent"
                    color="primary"
                    fontFamily="inter"
                    fontWeight={600}
                    variant="outline"
                    border="none"
                    borderRadius="10"
                    onClick={() => { console.log("Edit Account") }}
                >
                    Edit Accounts
                </Button>
            </Flex>
        )
    }

    return (
        <Layout title="Balance">
            <Text
                color="gray03"
                fontSize="20"
                fontFamily="inter"
                letterSpacing={1}
                fontWeight={600}
                padding={4}
            >
                Balance
            </Text>
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                padding={6}
            >
                <Card />
                {accounts.map((account, index) => (

                    <motion.div
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.8, type: 'easeInOut', delay: 0.2 }}
                    >

                        <CardAccount
                            key={index}
                            accountProps={account}
                            removeAccount={() => removeAccount(index)}
                        />
                    </motion.div>
                ))}
            </Grid>
        </Layout>
    );
};

export default Balance;