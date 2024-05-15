import { Text } from "@chakra-ui/react";
import Layout from "../Layout/LayoutApp"
import GridCards from "../Layout/GridCards";
import { CardAccountProps } from "../components/Card";

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

    return (
        <Layout title="Balance">
            <Text
                color="gray03"
                fontSize="20"
                fontFamily="inter"
                letterSpacing={1}
            >
                Balance
            </Text>
            <GridCards accounts={accounts} />
        </Layout>
    );
};

export default Balance;