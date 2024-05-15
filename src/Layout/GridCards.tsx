import { Grid, } from "@chakra-ui/react";
import CardAccount, { CardAccountProps } from "../components/Card";

interface GridCardsProps {
    accounts: CardAccountProps[];
}

const GridCards = ({ accounts }: GridCardsProps) => {
    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            padding={6}
        >
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
    );
}

export default GridCards;