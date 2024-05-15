import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import Layout from "../Layout/LayoutApp"
import CardAccount, { CardAccountProps } from "../components/Card";

const Balance = () => {
    const accounts = [
        {
            title: "Visa",
            subTitle: "Credit Card",
            type: "card",
            account: {
                number: 8547854785478547,
                totalAmount: 1300
            }
        },
        {
            title: "Master Card",
            subTitle: "Credit Card",
            type: "card",
            account: {
                number: 8547854785478547,
                totalAmount: 4000
            }
        },
        {
            title: "Banestes",
            subTitle: "Bank Account",
            type: "bank",
            account: {
                number: 8547,
                totalAmount: 1000
            }
        }, {
            title: "Clear",
            subTitle: "Investment",
            type: "investment",
            account: {
                number: 8547,
                totalAmount: 112000
            }
        }
        , {
            title: "Inter",
            subTitle: "Bank Account",
            type: "card",
            account: {
                number: 8547,
                totalAmount: 103200
            }
        }

    ] as CardAccountProps[]

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
                    onClick={() => { console.log("Add Account") }}
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
                    <CardAccount
                        key={index}
                        title={account.title}
                        subTitle={account.subTitle}
                        account={account.account}
                        type={account.type}
                    />
                ))}
            </Grid>
        </Layout>
    );
};

export default Balance;