import { Text } from "@chakra-ui/react";
import Layout from "../Layout/LayoutApp"
import GridCards from "../Layout/GridCards";
import { CardAccountProps } from "../components/Card";

const Balance = () => {

    const accounts = [
        {
            title: "Account",
            subTitle: "Account number",
            account: {
                number: 854785478854788547,
                totalAmount: 1000
            }
        },
        {
            title: "Account",
            subTitle: "Account number",
            account: {
                number: 854785478854788547,
                totalAmount: 1000
            }
        },
        {
            title: "Account",
            subTitle: "Account number",
            account: {
                number: 854785478854788547,
                totalAmount: 1000
            }
        }, {
            title: "Account",
            subTitle: "Account number",
            account: {
                number: 854785478854788547,
                totalAmount: 1000
            }
        }
        , {
            title: "Account",
            subTitle: "Account number",
            account: {
                number: 854785478854788547,
                totalAmount: 1000
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